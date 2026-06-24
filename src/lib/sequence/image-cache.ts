export class ImageCache {
  private cache = new Map<number, HTMLImageElement>();
  private pending = new Set<number>();
  private readonly maxSize: number;
  private basePath: string;

  constructor(basePath: string, maxSize = 50) {
    this.basePath = basePath;
    this.maxSize = maxSize;
  }

  private getUrlForFrame(frame: number): string {
    return this.basePath.replace('{frame}', String(frame).padStart(3, '0'));
  }

  public getFrame(frame: number): HTMLImageElement | undefined {
    // If it's already in the cache, move it to the end (most recently used)
    if (this.cache.has(frame)) {
      const img = this.cache.get(frame)!;
      this.cache.delete(frame);
      this.cache.set(frame, img);
      return img;
    }

    // If it's not pending and not in cache, request it
    if (!this.pending.has(frame)) {
      this.loadFrame(frame);
    }
    return undefined;
  }

  public prefetch(frames: number[]) {
    for (const frame of frames) {
      if (!this.cache.has(frame) && !this.pending.has(frame)) {
        this.loadFrame(frame);
      }
    }
  }

  private loadFrame(frame: number) {
    this.pending.add(frame);
    const img = new Image();
    img.onload = () => {
      this.pending.delete(frame);
      this.cache.set(frame, img);
      this.enforceSize();
    };
    img.onerror = () => {
      this.pending.delete(frame);
    };
    img.src = this.getUrlForFrame(frame);
  }

  private enforceSize() {
    if (this.cache.size > this.maxSize) {
      // Map iteration returns in insertion order (least recently used first)
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }
  }

  public clear() {
    this.cache.clear();
    this.pending.clear();
  }
}
