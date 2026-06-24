export function progressToFrame(
  progress: number,
  safeStartFrame: number,
  safeEndFrame: number
): number {
  const clamped = Math.min(1, Math.max(0, progress));
  const frameCount = safeEndFrame - safeStartFrame + 1;
  return Math.min(
    safeEndFrame,
    safeStartFrame + Math.round(clamped * (frameCount - 1))
  );
}
