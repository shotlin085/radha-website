export type SequenceManifest = {
  id: string;
  sourceArchive: string;
  sourceWidth: number;
  sourceHeight: number;
  sourceFrameRate: number;
  sourceFrameCount: number;
  safeStartFrame: number;
  safeEndFrame: number;
  safeFrameCount: number;
  initialPoster: string;
  finalPoster: string;
  desktopFramePattern: string;
  altDescription: string;
  phaseAnchors: Array<{
    id: string;
    startFrame: number;
    endFrame: number;
  }>;
};

export const SEQUENCES: Record<string, SequenceManifest> = {
  '01-radha-reveal': {
    id: '01-radha-reveal',
    sourceArchive: 'RADHA reveal : hero.zip',
    sourceWidth: 1920,
    sourceHeight: 1080,
    sourceFrameRate: 30,
    sourceFrameCount: 300,
    safeStartFrame: 1,
    safeEndFrame: 300,
    safeFrameCount: 300,
    initialPoster: '/assets/radha/posters/01-radha-reveal-initial.jpg',
    finalPoster: '/assets/radha/posters/01-radha-reveal-final.jpg',
    desktopFramePattern: '/assets/radha/sequences/01-radha-reveal/{frame}.jpg',
    altDescription: 'Animated RADHA product interface showing the device rotation and final Business Home resolution.',
    phaseAnchors: [
      { id: 'edge-on', startFrame: 1, endFrame: 45 },
      { id: 'splash', startFrame: 46, endFrame: 100 },
      { id: 'interface-reveal', startFrame: 101, endFrame: 185 },
      { id: 'reassembly', startFrame: 186, endFrame: 225 },
      { id: 'business-home', startFrame: 226, endFrame: 300 }
    ]
  },
  '02-scan-product-truth': {
    id: '02-scan-product-truth',
    sourceArchive: 'Scan to product truth.zip',
    sourceWidth: 1920,
    sourceHeight: 1080,
    sourceFrameRate: 30,
    sourceFrameCount: 300,
    safeStartFrame: 1,
    safeEndFrame: 300,
    safeFrameCount: 300,
    initialPoster: '/assets/radha/posters/02-scan-product-truth-initial.jpg',
    finalPoster: '/assets/radha/posters/02-scan-product-truth-final.jpg',
    desktopFramePattern: '/assets/radha/sequences/02-scan-product-truth/{frame}.jpg',
    altDescription: 'Animated sequence showing barcode scanning and detailed structured product information extraction.',
    phaseAnchors: [
      { id: 'scan-establishment', startFrame: 1, endFrame: 70 },
      { id: 'data-disassembly', startFrame: 71, endFrame: 160 },
      { id: 'structured-info', startFrame: 161, endFrame: 225 },
      { id: 'product-detail', startFrame: 226, endFrame: 300 }
    ]
  },
  '03-retail-operations': {
    id: '03-retail-operations',
    sourceArchive: 'Retail operations engine.zip',
    sourceWidth: 1920,
    sourceHeight: 1080,
    sourceFrameRate: 30,
    sourceFrameCount: 300,
    safeStartFrame: 1,
    safeEndFrame: 300,
    safeFrameCount: 300,
    initialPoster: '/assets/radha/posters/03-retail-operations-initial.jpg',
    finalPoster: '/assets/radha/posters/03-retail-operations-final.jpg',
    desktopFramePattern: '/assets/radha/sequences/03-retail-operations/{frame}.jpg',
    altDescription: 'Animated sequence showing the transition from Business Home to functional operational screens.',
    phaseAnchors: [
      { id: 'business-home', startFrame: 1, endFrame: 35 },
      { id: 'operational-separation', startFrame: 36, endFrame: 100 },
      { id: 'functional-operations', startFrame: 101, endFrame: 210 },
      { id: 'layer-collapse', startFrame: 211, endFrame: 250 },
      { id: 'operational-health', startFrame: 251, endFrame: 300 }
    ]
  },
  '04-private-owner-dashboard': {
    id: '04-private-owner-dashboard',
    sourceArchive: 'Private data → owner dashboard.zip',
    sourceWidth: 1920,
    sourceHeight: 1080,
    sourceFrameRate: 30,
    sourceFrameCount: 300,
    safeStartFrame: 1,
    safeEndFrame: 300,
    safeFrameCount: 300,
    initialPoster: '/assets/radha/posters/04-private-owner-dashboard-initial.jpg',
    finalPoster: '/assets/radha/posters/04-private-owner-dashboard-final.jpg',
    desktopFramePattern: '/assets/radha/sequences/04-private-owner-dashboard/{frame}.jpg',
    altDescription: 'Animated trust architecture showing private data protection and aggregate rollup to owner dashboard.',
    phaseAnchors: [
      { id: 'dashboard-endpoints', startFrame: 1, endFrame: 65 },
      { id: 'record-protection', startFrame: 66, endFrame: 120 },
      { id: 'central-vault', startFrame: 121, endFrame: 200 },
      { id: 'trust-architecture', startFrame: 201, endFrame: 300 }
    ]
  },
  '05-complete-ecosystem': {
    id: '05-complete-ecosystem',
    sourceArchive: 'Complete ecosystem : final assembly.zip',
    sourceWidth: 1920,
    sourceHeight: 1080,
    sourceFrameRate: 30,
    sourceFrameCount: 300,
    safeStartFrame: 1,
    safeEndFrame: 255, // CRITICAL LIMIT
    safeFrameCount: 255,
    initialPoster: '/assets/radha/posters/05-complete-ecosystem-initial.jpg',
    finalPoster: '/assets/radha/posters/05-complete-ecosystem-final.jpg',
    desktopFramePattern: '/assets/radha/sequences/05-complete-ecosystem/{frame}.jpg',
    altDescription: 'Animated final assembly sequence showing all distributed system interfaces coming together.',
    phaseAnchors: [
      { id: 'distributed-interfaces', startFrame: 1, endFrame: 65 },
      { id: 'assembly', startFrame: 66, endFrame: 180 },
      { id: 'central-phone', startFrame: 181, endFrame: 225 },
      { id: 'clean-brand-state', startFrame: 226, endFrame: 255 }
    ]
  }
};
