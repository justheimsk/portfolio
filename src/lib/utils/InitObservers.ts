export default function InitObservers(
  setOpIndex: React.Dispatch<React.SetStateAction<number>>,
  canvas: HTMLCanvasElement,
  worker: Worker,
) {
  let idx = 0;
  let viewport = false;
  let paused = false;

  const skillsContainer = document.getElementById('skills');
  if (!skillsContainer) viewport = true;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.target.id === 'skills') {
          if (entry.isIntersecting) {
            viewport = true;
            if(skillsContainer) observer.unobserve(skillsContainer);
          }
        }

        if(entry.target.id === canvas.id) {
          if(entry.isIntersecting && paused) {
            worker.postMessage({ event: 'resume' });
            paused = false;
          }

          if(!entry.isIntersecting && !paused) {
            worker.postMessage({ event: 'pause' });
            paused = true;
          }
        }
      }
    },
    {
      threshold: 0.2,
    },
  );

  if(skillsContainer) observer.observe(skillsContainer);
  observer.observe(canvas);

  const int = setInterval(() => {
    if (!viewport) return;
    setOpIndex(idx);
    idx++;

    if (idx >= 20) clearInterval(int);
  }, 500);
}
