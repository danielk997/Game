import {Images} from "./images";

export interface Block {
  image: HTMLImageElement;
}

function createImage(path: string): HTMLImageElement {
  const image = new Image(100, 100);
  image.src = path;
  return image;
}

export class BasicBlock implements Block {

  get image(): HTMLImageElement {
    return createImage(Images.block1);
  }
}

export class GreyBlock implements Block {

  get image(): HTMLImageElement {
    return createImage(Images.block1);
  }
}

export class RoadVertical implements Block {

  get image(): HTMLImageElement {
    return createImage(Images.roadVertical);
  }
}

export class RoadHorizontal implements Block {

  get image(): HTMLImageElement {
    return createImage(Images.roadHorizontal);
  }
}

export class RoadMerge implements Block {

  get image(): HTMLImageElement {
    return createImage(Images.roadMerge);
  }
}
