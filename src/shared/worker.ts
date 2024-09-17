import { Color } from 'three';
import { Stars } from '../lib';

const stars = new Stars({
  width: 0,
  height: 0,
  maxHeight: 800,
  rendererOptions: { antialias: true, alpha: true },
  clearColor: new Color(0xffffff),
});

self.onmessage = async (e) => {
  if (e.data.event === "init" && e.data.canvas) {
    stars.options.width = e.data.width;
    stars.options.height = e.data.height;

    try {
      await stars.init(e.data.canvas);
      stars.resize();
    } catch(err) {
      console.error("Failed to initialize webglrenderer", err);
    }
  } else if(e.data.event === "resize") {
    stars.options.width = e.data.width;
    stars.options.height = e.data.height;

    stars.resize();
  } else if(e.data.event == "pause") {
    stars.pause();
  } else if(e.data.event == "resume") {
    stars.resume();
  }
};
