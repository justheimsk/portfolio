import type { Effect } from '../interfaces/Effect';

export interface Mouse {
  x: number;
  y: number;
}

export class CustomCursor implements Effect {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public mouse: Mouse;
  public mouseDelay: Mouse;
  public hovering = false;
  public avgFps = 0;
  private hoverOffset = 1;
  private lastCalledTime = Date.now();
  private delta = 0;
  private fpsArray: number[] = [];
  private counter = 0;

  public constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'cursor';
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.mouseDelay = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    this.render = this.render.bind(this);
    this.resize = this.resize.bind(this);
  }

  public resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private attachEvents() {
    window.addEventListener('resize', this.resize);
    window.addEventListener('mousemove', (e) => {
      const hover = [
        'BUTTON',
        'A',
        'SVG',
        'PATH',
        'INPUT',
        'LABEL',
        'SELECT',
        'OPTION',
        'DETAILS',
        'SUMMARY',
      ];

      const hoverElement = document.elementFromPoint(e.clientX, e.clientY)?.tagName.toUpperCase() || '';
      if(hover.includes(hoverElement)) this.hovering = true;
      else this.hovering = false;

      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;

      setTimeout(() => {
        this.mouseDelay.x = e.clientX;
        this.mouseDelay.y = e.clientY;
      }, 50);
    });
  }

  public init() {
    this.attachEvents();
    this.resize();

    document.body.appendChild(this.canvas);

    this.render();
  }

  public render() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let fps = 0;

    //this.ctx.beginPath();
    //this.ctx.font = '50px Arial';
    //this.ctx.fillText(
    //  `FPS: ${this.avgFps}`,
    //  window.innerWidth / 2,
    //  window.innerHeight / 2,
    //);
    //this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.fillStyle = 'white';
    this.ctx.arc(this.mouse.x, this.mouse.y, 3, 0, 360);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 1.5;
    this.ctx.arc(this.mouseDelay.x, this.mouseDelay.y, 10 * this.hoverOffset, 0, 360);
    this.ctx.stroke();
    this.ctx.closePath();

    if(this.hovering) {
      if(this.hoverOffset < 2) {
        this.hoverOffset += 0.2;
      }
    } else {
      if(this.hoverOffset > 1) {
        this.hoverOffset -= 0.2;
      }
    }

    this.delta = (Date.now() - this.lastCalledTime) / 1000;
    this.lastCalledTime = Date.now();
    fps = Math.ceil(1 / this.delta);

    if (this.counter >= 60) {
      const sum = this.fpsArray.reduce((a, b) => {
        return a + b;
      });

      this.avgFps = Math.ceil(sum / this.fpsArray.length);
      this.counter = 0;
    } else {
      if (fps !== Number.POSITIVE_INFINITY) this.fpsArray.push(fps);
      this.counter++;
    }

    requestAnimationFrame(this.render);
  }
}
