import { Color } from 'three';
import { Stars } from '../lib';

const stars = new Stars({
  width: 0,
  height: 0,
  maxHeight: 800,
  rendererOptions: { antialias: true, alpha: true },
  clearColor: new Color(0xffffff),
});

self.onmessage = (e) => {
  if (e.data.event === "init" && e.data.canvas) {
    stars.options.width = e.data.width;
    stars.options.height = e.data.height;

    try {
      stars.init(e.data.canvas);
      stars.resize();
    } catch(err) {
      console.error("Failed to initialize webglrenderer")
    }
  } else if(e.data.event === "resize") {
    stars.options.width = e.data.width;
    stars.options.height = e.data.height;

    stars.resize();
  }
};
