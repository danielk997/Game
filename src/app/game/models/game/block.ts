import {InfrastructureUnit} from "./infrastructure";
import {Images} from "./images";

export enum BlockType {
  BUILDING,
  ROAD,
  REMOVE
}

export interface Block<T extends InfrastructureUnit> {
  name: string;
  type: BlockType;
  image: HTMLImageElement;
  price: number;
  data: T;
}

export function createImage(path: string): HTMLImageElement {
  const image = new Image(100, 100);
  image.src = path;
  return image;
}

export const blockMap: Map<string, Block<any>> = new Map<string, Block<any>>([]);

export class RemoveBlock implements Block<any> {
  data: any;
  image: HTMLImageElement = createImage(Images.remove);
  name = 'Remove';
  price = 0;
  type: BlockType = BlockType.REMOVE;
}
