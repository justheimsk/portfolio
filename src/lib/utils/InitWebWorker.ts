export function InitWebWorker(id: string) {
  const canvas = document.getElementById(id) as HTMLCanvasElement;
  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const offscreen = canvas.transferControlToOffscreen();
  const worker = new Worker(new URL('../../shared/worker.ts', import.meta.url), {
    type: 'module',
  });

  worker.postMessage(
    {
      event: 'init',
      canvas: offscreen,
      width: window.innerWidth,
      height: window.innerHeight,
    },
    [offscreen],
  );

  window.addEventListener('resize', () => {
    worker.postMessage({
      event: 'resize',
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return {
    canvas,
    worker,
  };
}
