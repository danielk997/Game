import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit, OnInit {

  @ViewChild('canvasElement') canvas: any;
  gridSize = 20;
  canvasSize = {width: 1400 / 2, height: 1400 / 2};
  ctx!: CanvasRenderingContext2D;
  frames: CanvasFrame[] = [];
  currentFrame?: CanvasFrame;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.fillBackground();
    this.initCanvasFrames();
    console.log(this.frames)
  }

  onMouseMove(event: any) {
    this.fillBackground();
    this.setCurrentFrame(event);
    this.frames
      .filter(it => it.data)
      .forEach(it => {
      this.drawRect({
        x: it?.x,
        y: it?.y,
        width: it?.size,
        height: it?.size
      })
    })
    this.drawRect({
      color: 'silver',
      x: this.currentFrame?.x,
      y: this.currentFrame?.y,
      width: this.currentFrame?.size,
      height: this.currentFrame?.size
    })
  }

  setCurrentFrame(event: any) {
    this.currentFrame = this.getFrame(getMousePos(this.canvas.nativeElement, event));
  }

  onClick() {
    this.frames = this.frames.map(it => {
      if(it.id === this.currentFrame?.id) {
        return {
          ...it,
          data: 'Data 123'
        }
      }

      return it
    });

    this.drawRect({
      x: this.currentFrame?.x,
      y: this.currentFrame?.y,
      width: this.currentFrame?.size,
      height: this.currentFrame?.size
    });

    console.log(this.frames)
  }

  private getFrame(position: { x: number, y: number }): CanvasFrame | undefined {
    return this.frames.find(it => {
      const ratio = this.canvasSize.width / this.gridSize;
      const x = Math.floor(position.x / ratio);
      const y = Math.floor(position.y / ratio);

      return it.x / ratio === x && it.y / ratio === y;
    });
  }

  private fillBackground() {
    this.ctx.fillStyle = 'lightblue'
    this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height);
  }

  private drawRect(options: DrawRectOptions) {
    this.ctx.fillStyle = options.color ?? '#000';
    this.ctx.fillRect(
      options.x ?? 0,
      options.y ?? 0,
      options.width ?? 10,
      options.height ?? 10
    );
  }

  private initCanvasFrames() {
    const size = this.gridSize;
    const x = this.canvasSize.width / size;
    const y = this.canvasSize.width / size;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        this.frames.push({
          id: `${i}${j}${x}${y}`,
          x: j * x,
          y: i * y,
          size: x
        })
      }
    }
  }
}

interface DrawRectOptions {
  x?: number,
  y?: number,
  width?: number,
  height?: number,
  color?: string
}

function getMousePos(canvas: HTMLCanvasElement, evt: any): { x: number, y: number } {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

interface CanvasFrame {
  id: string;
  x: number;
  y: number;
  size: number;
  data?: any
}
