import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CanvasFrame} from "../../models/canvas/canvas-frame";
import {DrawRectOptions} from "../../models/canvas/draw-rect-options";
import {BasicBlock, Block, GreyBlock, RoadHorizontal, RoadMerge, RoadVertical} from "../../models/game/block";
import {Position} from "../../models/canvas/position";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit, OnInit {

  @ViewChild('canvasElement') canvas: any;
  @Input() blockType = 'basic';
  gridSize = 10;
  canvasSize = {width: 1000 / 2, height: 1000 / 2};
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
        this.drawImage(
          it.data.image, {
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
      if (it.id === this.currentFrame?.id) {
        return {
          ...it,
          data: getBlock(this.blockType)
        }
      }
      return it
    });

    this.drawImage(this.currentFrame?.data?.image, {
      x: this.currentFrame?.x,
      y: this.currentFrame?.y,
      width: this.currentFrame?.size,
      height: this.currentFrame?.size
    });
  }

  private getFrame(position: Position): CanvasFrame | undefined {
    return this.frames.find(it => {
      return this.isFrameOnClientPosition(position, it);
    });
  }

  private isFrameOnClientPosition(position: Position, frame: CanvasFrame): boolean {
    const ratio = this.canvasSize.width / this.gridSize;
    const x = Math.floor(position.x / ratio);
    const y = Math.floor(position.y / ratio);

    return frame.x / ratio === x && frame.y / ratio === y;
  }

  private fillBackground() {
    this.ctx.fillStyle = 'grey'
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

  private drawImage(image: HTMLImageElement, options: DrawRectOptions) {

    this.ctx.drawImage(
      image,
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


function getMousePos(canvas: HTMLCanvasElement, evt: any): { x: number, y: number } {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function getBlock(name: string): Block {
  switch (name) {
    case 'basic':
      return new BasicBlock();
    case 'road-vertical':
      return new RoadVertical();
    case 'road-horizontal':
      return new RoadHorizontal();
    case 'road-merge':
      return new RoadMerge();
  }

  return new BasicBlock();
}
