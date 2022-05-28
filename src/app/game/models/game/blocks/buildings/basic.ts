import {Building, Prestige} from "../../infrastructure";
import {Images} from "../../images";
import {Block, BlockType, createImage} from "../../block";

export class BuildingName {
  static basicBlock = 'Basic Block';
  static greyBlock = 'Grey Block';
}

export class BasicBuilding implements Block<Building> {
  name = BuildingName.basicBlock;
  type = BlockType.BUILDING;
  price = 50000;
  data: Building = {
    capability: 48,
    prestige: Prestige.LOW,
    maintenanceCost: 1500,
    lifeQuality: 0
  };
  get image(): HTMLImageElement {
    return createImage(Images.basicBlock);
  }
}

export class GreyBlock implements Block<Building> {
  name = BuildingName.greyBlock;
  type = BlockType.BUILDING;
  price = 45000;
  data: Building = {
    capability: 36,
    prestige: Prestige.LOW,
    maintenanceCost: 800,
    lifeQuality: 0
  };
  get image(): HTMLImageElement {
    return createImage(Images.greyBlock);
  }
}

export const basicBuildingMap: Map<string, Block<Building>> = new Map<string, Block<Building>>([
  [BuildingName.basicBlock, new BasicBuilding()],
  [BuildingName.greyBlock, new GreyBlock()],
]);



