import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CanvasFrame} from "../../models/canvas/canvas-frame";
import {DrawRectOptions} from "../../models/canvas/draw-rect-options";
import {Block, BlockType, createImage, RemoveBlock} from "../../models/game/block";
import {Position} from "../../models/canvas/position";
import {basicRoadMap} from "../../models/game/blocks/roads/basic";
import {BasicBuilding, basicBuildingMap} from "../../models/game/blocks/buildings/basic";
import {Images} from "../../models/game/images";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit, OnInit {

  @ViewChild('canvasElement') canvas: any;
  @Output() blockAdd: EventEmitter<Block<any>> = new EventEmitter<Block<any>>();
  @Output() blockRemove: EventEmitter<Block<any>> = new EventEmitter<Block<any>>();
  @Input() blockName = '';
  gridSize = 10;
  canvasSize = {width: 1000 / 2, height: 1000 / 2};
  ctx!: CanvasRenderingContext2D;
  frames: CanvasFrame[] = [];
  currentFrame?: CanvasFrame;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.fillBackground();
    this.initCanvasFrames();
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
    const block = getBlockToAdd(this.blockName);
    const currentBlock: CanvasFrame | undefined = this.frames.find(it => it.id === this.currentFrame?.id);

    if (block.type === BlockType.REMOVE) {
      this.removeBlock(currentBlock?.data);
      return;
    }


    this.frames = this.frames.map(it => {
      if (it.id === this.currentFrame?.id) {
        return {
          ...it,
          data: block
        }
      }
      return it
    });

    this.blockAdd.emit(block);
  }

  private removeBlock(block?: Block<any>) {
    if(!block)
      return;

    this.frames = this.frames.map(it => {
      if (it.id === this.currentFrame?.id) {
        return {
          ...it,
          data: null
        }
      }
      return it
    });
    this.blockRemove.emit(block);
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
    this.ctx.fillStyle = this.ctx.createPattern(createImage(Images.grass), '')!
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

function getBlockToAdd(name: string): Block<any> {
  if (name === 'Remove')
    return new RemoveBlock();

  if (basicRoadMap.get(name))
    return basicRoadMap.get(name)!

  if (basicBuildingMap.get(name))
    return basicBuildingMap.get(name)!

  return new BasicBuilding();
}
