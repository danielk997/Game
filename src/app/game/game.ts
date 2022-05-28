import {Citizen, DefaultCitizen} from "./models/game/population";
import {randomInteger} from "../utils/common";
import {Injectable} from "@angular/core";
import {Block, BlockType} from "./models/game/block";
import {Building, Infrastructure, Road} from "./models/game/infrastructure";

@Injectable({
  providedIn: 'root'
})
export class Game {

  state: GameState = {
    money: 1000,
    population: [],
    infrastructure: {
      buildings: [],
      roads: []
    }
  }

  start() {
    this.addCitizens();
  }

  pause() {

  }

  private addCitizens() {
    const citizensToAdd = [];
    const length = randomInteger(3, 7);

    for (let i = 0; i < length; i++) {
      citizensToAdd.push(new DefaultCitizen());
    }

    this.state = {
      ...this.state,
      population: [...this.state.population, ...citizensToAdd]
    }
  }

  addBlock(block: Block<any>) {
    switch (block.type) {
      case BlockType.BUILDING:
        this.addBuilding(block);
        break;
      case BlockType.ROAD:
        this.addRoad(block);
        break;
    }
  }

  private addBuilding(building: Block<Building>) {
    this.state = {
      ...this.state,
      infrastructure: {
        ...this.state.infrastructure,
        buildings: [...this.state.infrastructure.buildings, building.data],
      },
      money: this.state.money - building.price
    }
  }

  private addRoad(road: Block<Road>) {
    this.state = {
      ...this.state,
      infrastructure: {
        ...this.state.infrastructure,
        roads: [...this.state.infrastructure.roads, 'ROAD'],
      },
      money: this.state.money - road.price
    }
  }
}


export interface GameState {
  money: number;
  population: Citizen[];
  infrastructure: Infrastructure;
}

