import { type Color, PerspectiveCamera, Scene, Sprite, SpriteMaterial, WebGLRenderer, type WebGLRendererParameters } from "three";
import type { Effect } from "../interfaces/Effect";

export interface StarsOptions {
  elId?: string;
  rendererOptions?: WebGLRendererParameters;
  clearColor?: Color;
  maxHeight?: number;
  height?: number;
  width?: number;
}

export class Stars implements Effect {
  public renderer?: WebGLRenderer;
  public scene: Scene;
  public camera: PerspectiveCamera;
  private radius = 10;
  private angle = 0;
  public options: StarsOptions;
  public rendering = false;
  private paused = false;

  public constructor(options?: StarsOptions) {
    this.options = options || {};
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, this.width / this.height, 3, 1000);


    this.render = this.render.bind(this);
    this.resize = this.resize.bind(this);
  }

  private get height() {
    return this.options.maxHeight && (this.options.height ?? window.innerHeight) > this.options.maxHeight ? this.options.maxHeight : (this.options.height ?? window.innerHeight);
  }

  private get width() {
    return this.options.width ?? window.innerWidth;
  }

  private random() {
    return Math.random() * 50 - 25;
  }

  public pause() {
    this.paused = true;
    this.rendering = false;
  }

  public resume() {
    this.paused = false;
    this.rendering = true;
    this.render();
  }

  private generateStars(count: number): Promise<Sprite[]> {
    return new Promise((resolve) => {
      const starfield: Sprite[] = [];
      const material = new SpriteMaterial({ color: 0xffffff });

      for(let i = 0; i < count; i++) {
        const star = new Sprite(material);
        star.position.set(this.random(), this.random(), this.random());
        star.scale.set(0.05, 0.05, 0.05);

        starfield.push(star);
      }

      resolve(starfield);
    });
  }

  public resize() {
    this.renderer?.setSize(this.width, this.height - 32, false);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.camera.position.set(this.radius, 5, 10);
  }

  public attachEvents() {
    window.addEventListener('resize', this.resize);
  }

  public async init(canvas?: HTMLCanvasElement) {
    this.scene.clear();

    if(canvas) this.options.rendererOptions = { canvas, ...this.options.rendererOptions };
    this.renderer = new WebGLRenderer(this.options?.rendererOptions);
    
    if(this.options) {
      if(this.options.elId) this.renderer.domElement.id = this.options.elId;
      if(this.options.clearColor) this.renderer.setClearColor(this.options.clearColor, 0);
    }

    const stars = await this.generateStars(1500);
    this.scene.add(...stars);

    if(!this.options.rendererOptions?.canvas) document.body.appendChild(this.renderer.domElement);
    
    if(!this.rendering) {
      this.render();
      this.rendering = true;
    }
  }

  private render() {
    if(this.paused) return;

    this.angle += 0.0015;
    this.camera.position.x = this.radius * Math.cos(this.angle);
    this.camera.position.z = this.radius * Math.sin(this.angle);
    this.camera.position.y = this.radius * Math.sin(this.angle);
    this.camera.lookAt(0, 5, 0);

    this.renderer?.render(this.scene, this.camera);

    setTimeout(() => requestAnimationFrame(this.render), 1000 / 60);
  }
}
