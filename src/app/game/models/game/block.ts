import {InfrastructureUnit} from "./infrastructure";

export enum BlockType {
  BUILDING,
  ROAD
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
