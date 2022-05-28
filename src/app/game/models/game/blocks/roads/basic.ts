import {Images} from "../../images";
import {Block, BlockType, createImage} from "../../block";

export class RoadName {
  static road1 = 'Road 1';
  static road2 = 'Road 2';
  static road3 = 'Road 3';
  static road4 = 'Road 4';
  static road5 = 'Road 5';
  static road6 = 'Road 6';
  static road7 = 'Road 7';
  static road8 = 'Road 8';
  static road9 = 'Road 9';
  static road10 = 'Road 10';
  static road11 = 'Road 11';
}

abstract class BasicRoadBase implements Block<any> {
  abstract name: string;
  type = BlockType.ROAD;
  price = 1000;
  data: any;

  abstract get image(): HTMLImageElement;
}

export class RoadVertical extends BasicRoadBase implements Block<any> {

  name = RoadName.road1;

  get image(): HTMLImageElement {
    return createImage(Images.roadVertical);
  }
}

export class RoadHorizontal extends BasicRoadBase implements Block<any> {

  name = RoadName.road2;

  get image(): HTMLImageElement {
    return createImage(Images.roadHorizontal);
  }
}

export class RoadMerge extends BasicRoadBase implements Block<any> {

  name = RoadName.road3;

  get image(): HTMLImageElement {
    return createImage(Images.roadMerge);
  }
}

export class RoadRBL extends BasicRoadBase implements Block<any> {

  name = RoadName.road4;

  get image(): HTMLImageElement {
    return createImage(Images.roadRBL);
  }
}

export class RoadTRB extends BasicRoadBase implements Block<any> {

  name = RoadName.road5;

  get image(): HTMLImageElement {
    return createImage(Images.roadTRB);
  }
}

export class RoadTBL extends BasicRoadBase implements Block<any> {

  name = RoadName.road6;

  get image(): HTMLImageElement {
    return createImage(Images.roadTBL);
  }
}

export class RoadTRL extends BasicRoadBase implements Block<any> {

  name = RoadName.road7;

  get image(): HTMLImageElement {
    return createImage(Images.roadTRL);
  }
}

export class RoadBL extends BasicRoadBase implements Block<any> {

  name = RoadName.road8;

  get image(): HTMLImageElement {
    return createImage(Images.roadBL);
  }
}

export class RoadRB extends BasicRoadBase implements Block<any> {

  name = RoadName.road9;

  get image(): HTMLImageElement {
    return createImage(Images.roadRB);
  }
}

export class RoadTL extends BasicRoadBase implements Block<any> {

  name = RoadName.road10;

  get image(): HTMLImageElement {
    return createImage(Images.roadTL);
  }
}

export class RoadTR extends BasicRoadBase implements Block<any> {

  name = RoadName.road11;

  get image(): HTMLImageElement {
    return createImage(Images.roadTR);
  }
}

export const basicRoadMap: Map<string, Block<any>> = new Map<string, Block<any>>([
  [RoadName.road1, new RoadVertical()],
  [RoadName.road2, new RoadHorizontal()],
  [RoadName.road3, new RoadMerge()],
  [RoadName.road4, new RoadRBL()],
  [RoadName.road5, new RoadTRB()],
  [RoadName.road6, new RoadTBL()],
  [RoadName.road7, new RoadTRL()],
  [RoadName.road8, new RoadBL()],
  [RoadName.road9, new RoadRB()],
  [RoadName.road10, new RoadTL()],
  [RoadName.road11, new RoadTR()],
]);

