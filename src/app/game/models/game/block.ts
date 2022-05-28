import {Images} from "./images";
import {Building, Prestige} from "./infrastructure";


export enum BlockType {
  BUILDING,
  ROAD
}

export interface Block<T> {
  name: string;
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

  name = 'Basic block';
  type = BlockType.BUILDING;
  price = 1000;
  data: Building = {
    capability: 10,
    prestige: Prestige.LOW
  }

  get image(): HTMLImageElement {
    return createImage(Images.block1);
  }

}

export class GreyBlock implements Block<Building> {
  name = 'Grey block';
  type = BlockType.BUILDING;
  price = 1000;
  data: Building = {
    capability: 10,
    prestige: Prestige.LOW
  }

  get image(): HTMLImageElement {
    return createImage(Images.block1);
  }
}

export class RoadVertical implements Block<any> {

  name = 'Road vertical';
  type = BlockType.ROAD;
  price = 1000;
  data: any;

  get image(): HTMLImageElement {
    return createImage(Images.roadVertical);
  }
}

export class RoadHorizontal implements Block<any> {

  name = 'Road horizontal';
  type = BlockType.ROAD;
  price = 1000;
  data: any;

  get image(): HTMLImageElement {
    return createImage(Images.roadHorizontal);
  }
}

export class RoadMerge implements Block<any> {

  name = 'Road merge';
  type = BlockType.ROAD;
  price = 1000;
  data: any;

  get image(): HTMLImageElement {
    return createImage(Images.roadMerge);
  }
}
