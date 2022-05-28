import {Images} from "./images";
import {Building, Prestige} from "./infrastructure";


export enum BlockType {
  BUILDING,
  ROAD
}

export interface Block<T> {
  type: BlockType;
  image: HTMLImageElement;
  price: number;
  data: T;
}

function createImage(path: string): HTMLImageElement {
  const image = new Image(100, 100);
  image.src = path;
  return image;
}

export class BasicBlock implements Block<Building> {

  type = BlockType.BUILDING;

  get image(): HTMLImageElement {
    return createImage(Images.block1);
  }

  price = 1000;

  data: Building = {
    capability: 10,
    prestige: Prestige.LOW
  }
}

export class GreyBlock implements Block<Building> {

  type = BlockType.BUILDING;

  get image(): HTMLImageElement {
    return createImage(Images.block1);
  }

  price = 1000;

  data: Building = {
    capability: 10,
    prestige: Prestige.LOW
  }
}

export class RoadVertical implements Block<any> {

  type = BlockType.ROAD;

  get image(): HTMLImageElement {
    return createImage(Images.roadVertical);
  }

  price = 1000;

  data: any;
}

export class RoadHorizontal implements Block<any> {

  type = BlockType.ROAD;

  get image(): HTMLImageElement {
    return createImage(Images.roadHorizontal);
  }

  price = 1000;

  data: any;
}

export class RoadMerge implements Block<any> {

  type = BlockType.ROAD;

  get image(): HTMLImageElement {
    return createImage(Images.roadMerge);
  }

  price = 1000;

  data: any;
}
