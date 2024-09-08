import { type Color, PerspectiveCamera, Scene, Sprite, SpriteMaterial, WebGLRenderer, type WebGLRendererParameters } from "three";
import type { Effect } from "../interfaces/Effect";

export interface StarsOptions {
  elId?: string;
  rendererOptions?: WebGLRendererParameters;
  clearColor?: Color;
  maxHeight?: number;
}

export class Stars implements Effect {
  private renderer: WebGLRenderer;
  public scene: Scene;
  public camera: PerspectiveCamera;
  private radius = 10;
  private angle = 0;
  public options: StarsOptions;

  public constructor(options?: StarsOptions) {
    this.options = options || {};
    this.renderer = new WebGLRenderer(options?.rendererOptions);
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, window.innerWidth / this.height, 2, 1000);

    if(options) {
      if(options.elId) this.renderer.domElement.id = options.elId;
      if(options.clearColor) this.renderer.setClearColor(options.clearColor, 0);
    }

    this.render = this.render.bind(this);
    this.resize = this.resize.bind(this);
  }

  private get height() {
    return this.options.maxHeight && window.innerHeight > this.options.maxHeight ? this.options.maxHeight : window.innerHeight;
  }

  private random() {
    return Math.random() * 50 - 25;
  }

  private generateStars(count: number) {
    const starfield: Sprite[] = [];
    const material = new SpriteMaterial({ color: 0xffffff });

    for(let i = 0; i < count; i++) {
      const star = new Sprite(material);
      star.position.set(this.random(), this.random(), this.random());
      star.scale.set(0.05, 0.05, 0.05);

      starfield.push(star);
    }

    return starfield;
  }

  public resize() {
    this.renderer.setSize(window.innerWidth, this.height - 32);
    this.camera.aspect = window.innerWidth / this.height;
    this.camera.updateProjectionMatrix();
    this.camera.position.set(this.radius, 5, 10);
  }

  private attachEvents() {
    window.addEventListener('resize', this.resize);
  }

  public init() {
    this.attachEvents();
    this.resize();

    const stars = this.generateStars(1500);
    for(const star of stars) {
      this.scene.add(star)
    }

    document.body.appendChild(this.renderer.domElement);
    this.render();
  }

  private render() {
    this.angle += 0.0015;
    this.camera.position.x = this.radius * Math.cos(this.angle);
    this.camera.position.z = this.radius * Math.sin(this.angle);
    this.camera.position.y = this.radius * Math.sin(this.angle);
    this.camera.lookAt(0, 5, 0);

    this.renderer.render(this.scene, this.camera);

    setTimeout(() => requestAnimationFrame(this.render), 1000 / 60);
  }
}
