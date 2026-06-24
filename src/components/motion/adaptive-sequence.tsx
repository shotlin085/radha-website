'use client';

import React, { useEffect, useRef } from 'react';
import { globalScheduler } from '@/lib/sequence/scheduler';
import { ImageCache } from '@/lib/sequence/image-cache';
import { progressToFrame } from '@/lib/sequence/progress-to-frame';
import { SequenceManifest } from '@/content/sequence-manifest';

interface AdaptiveSequenceProps {
  manifest: SequenceManifest;
  className?: string;
  pinLength?: string; // e.g. "300vh"
}

export function AdaptiveSequence({ manifest, className = '', pinLength = '300vh' }: AdaptiveSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cacheRef = useRef<ImageCache | null>(null);
  
  const targetFrameRef = useRef(manifest.safeStartFrame);
  const currentFrameRef = useRef(manifest.safeStartFrame);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    cacheRef.current = new ImageCache(manifest.desktopFramePattern, 48);
    
    const observer = new IntersectionObserver((entries) => {
      isVisibleRef.current = entries[0].isIntersecting;
      if (isVisibleRef.current && cacheRef.current) {
        cacheRef.current.prefetch([manifest.safeStartFrame, manifest.safeStartFrame + 1, manifest.safeStartFrame + 2]);
      }
    }, { rootMargin: '1000px 0px' });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [manifest]);

  useEffect(() => {
    const updateTargetFrame = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      const scrollRange = rect.height - windowHeight;
      if (scrollRange > 0) {
        progress = -rect.top / scrollRange;
      }
      
      targetFrameRef.current = progressToFrame(progress, manifest.safeStartFrame, manifest.safeEndFrame);
    };

    const handleScroll = () => {
      if (isVisibleRef.current) {
        updateTargetFrame();
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial calculation
    updateTargetFrame();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [manifest]);

  useEffect(() => {
    const renderLoop = () => {
      if (!isVisibleRef.current || !canvasRef.current || !cacheRef.current) return;

      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      
      if (Math.abs(target - current) > 0.1) {
        currentFrameRef.current += (target - current) * 0.3;
      } else {
        currentFrameRef.current = target;
      }

      const frameToDraw = Math.round(currentFrameRef.current);
      const img = cacheRef.current.getFrame(frameToDraw);
      
      if (img && img.complete) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          const { width, height } = canvasRef.current;
          ctx.clearRect(0, 0, width, height);
          
          const srcRatio = manifest.sourceWidth / manifest.sourceHeight;
          const dstRatio = width / height;
          let drawW = width;
          let drawH = height;
          let offX = 0;
          let offY = 0;

          if (srcRatio > dstRatio) {
            drawH = height;
            drawW = height * srcRatio;
            offX = (width - drawW) / 2;
          } else {
            drawW = width;
            drawH = width / srcRatio;
            offY = (height - drawH) / 2;
          }
          
          ctx.drawImage(img, offX, offY, drawW, drawH);
        }
      } else {
        // Fallback to poster if initial frame not loaded yet
        if (frameToDraw === manifest.safeStartFrame) {
             const poster = cacheRef.current.getFrame(-1) || new Image();
             if (poster.src === '') {
                 poster.src = manifest.initialPoster;
                 poster.onload = () => {
                     const ctx = canvasRef.current?.getContext('2d');
                     if (ctx && canvasRef.current) {
                         ctx.drawImage(poster, 0, 0, canvasRef.current.width, canvasRef.current.height);
                     }
                 }
             }
        }
      }

      const direction = target >= current ? 1 : -1;
      const toFetch = [];
      for(let i=1; i<=5; i++) {
          const f = frameToDraw + direction * i;
          if (f >= manifest.safeStartFrame && f <= manifest.safeEndFrame) {
              toFetch.push(f);
          }
      }
      cacheRef.current.prefetch(toFetch);
    };

    globalScheduler.addTask(renderLoop);
    return () => globalScheduler.removeTask(renderLoop);
  }, [manifest]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`} style={{ height: pinLength }}>
      <div className="sticky top-0 w-full h-[100svh] overflow-hidden flex items-center justify-center bg-radha-canvas">
        <canvas
          ref={canvasRef}
          width={manifest.sourceWidth}
          height={manifest.sourceHeight}
          className="w-full h-full object-contain max-w-[1440px] mx-auto"
        />
      </div>
    </div>
  );
}
