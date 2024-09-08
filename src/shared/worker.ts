import { Color } from 'three';
import { Stars } from '../lib';

const stars = new Stars({
  width: 0,
  height: 0,
  rendererOptions: { antialias: true, alpha: true },
  clearColor: new Color(0xffffff)
});

self.onmessage = (e) => {
  if (e.data.event === "init" && e.data.canvas) {
    stars.options.width = e.data.width;
    stars.options.height = e.data.height;

    stars.resize();
    stars.init(e.data.canvas);
  } else if(e.data.event === "resize") {
    stars.options.width = e.data.width;
    stars.options.height = e.data.height;

    stars.resize();
  }
};
