import {Block, BlockType, createImage} from "../../block";
import {Images} from "../../images";
import {RoadName, RoadVertical} from "../roads/basic";

export class PlantName {
  static palm = 'Palm';
}

abstract class BasicPlantBase implements Block<any> {
  abstract name: string;
  type = BlockType.PLANT;
  price = 2500;
  data = {
    maintenanceCost: 40,
    lifeQuality: 3
  }

  abstract get image(): HTMLImageElement;
}

export class Palm extends BasicPlantBase {
  name = PlantName.palm;

  get image(): HTMLImageElement {
    return createImage(Images.palm);
  }
}

export const basicPlantMap: Map<string, Block<any>> = new Map<string, Block<any>>([
  [PlantName.palm, new Palm()],
]);

