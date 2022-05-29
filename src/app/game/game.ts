import {Citizen, DefaultCitizen} from "./models/game/population";
import {Injectable} from "@angular/core";
import {Block, BlockType} from "./models/game/block";
import {Building, Infrastructure, Road} from "./models/game/infrastructure";
import {Subject} from "rxjs";
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class Game {

  state: GameState = {
    date: new GameDate(),
    money: 100000,
    population: [],
    infrastructure: {
      buildings: [],
      roads: []
    },
    lifeQuality: 0,
    taxPercentage: 6
  }

  start() {
    this.addCitizens();
    const gameInterval = setInterval(() => {
      this.state.date.tick();
    }, 500)
    this.state.date.subject$.subscribe(it => {
      this.updateGameState();
    })
  }

  pause() {

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

    this.updateLifeQuality();
  }

  removeBlock(block: Block<any>) {
    switch (block.type) {
      case BlockType.BUILDING:
        this.removeBuilding(block);
        break;
      case BlockType.ROAD:
        this.removeRoad(block);
        break;
    }

    this.updateLifeQuality();
  }

  private updateGameState() {
    this.getTax();
    this.payMaintenanceCosts();
    this.addCitizens();
    this.gameOver();
  }

  get totalCapability(): number {
    return this.state.infrastructure.buildings.map(it => it.capability).reduce((a, b) => a + b, 0);
  }

  get totalPopulation(): number {
    return this.state.population.length;
  }

  getTax() {
    this.state.money += this.state.population.map(it => Math.round(it.profession.earnings * this.state.taxPercentage / 100))
      .reduce((a, b) => a + b, 0);
  }

  payMaintenanceCosts() {
    const allCosts = this.state.infrastructure.buildings.map(it => it.maintenanceCost).reduce((a, b) => a + b, 0)
      + this.state.infrastructure.roads.map(it => it.maintenanceCost).reduce((a, b) => a + b, 0)

    this.state.money -= allCosts;
  }

  private gameOver() {
    if (this.state.date.week < 5)
      return;

    if (this.state.population.length === 0 || this.state.money <= 0) {
      // alert('GAME OVER');
    }
  }

  private updateLifeQuality() {
    const totalLifeQuality = this.state.infrastructure.roads
      .map(it => it.lifeQuality).reduce((a, b) => a + b, 0) - this.state.taxPercentage;

    this.state.lifeQuality = totalLifeQuality;
  }

  private addCitizens() {
    let length = Math.abs(this.state.lifeQuality);

    for (let i = 0; i < length; i++) {
      if (this.totalPopulation < this.totalCapability) {
        this.state.lifeQuality > 0 ? this.addCitizen(new DefaultCitizen()) : this.removeCitizen();
      }
    }
  }

  private addCitizen(citizen: Citizen) {
    this.state = {
      ...this.state,
      population: [...this.state.population, citizen]
    }
  }

  private removeCitizen() {
    this.state = {
      ...this.state,
      population: _.drop(this.state.population)
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

  private removeBuilding(building: Block<Building>) {
    this.state = {
      ...this.state,
      infrastructure: {
        ...this.state.infrastructure,
        buildings: _.pull(this.state.infrastructure.buildings, building.data)
      },
      money: this.state.money + Math.round(building.price * 0.95)
    }
  }

  private addRoad(road: Block<Road>) {
    this.state = {
      ...this.state,
      infrastructure: {
        ...this.state.infrastructure,
        roads: [...this.state.infrastructure.roads, road.data],
      },
      money: this.state.money - road.price
    }
  }

  private removeRoad(road: Block<Road>) {
    this.state = {
      ...this.state,
      infrastructure: {
        ...this.state.infrastructure,
        roads: _.pull(this.state.infrastructure.roads, road.data)
      },
      money: this.state.money + Math.round(road.price * 0.95)
    }
  }
}

export interface GameState {
  date: GameDate;
  money: number;
  population: Citizen[];
  infrastructure: Infrastructure;
  lifeQuality: number;
  taxPercentage: number;
}

class GameDate {

  subject$: Subject<void> = new Subject<void>();

  hour = 0;
  day = 1;
  week = 1;

  tick() {
    this.hour++;
    if (this.hour === 24) {
      this.day++;

      if (this.day % 8 === 0) {
        this.week++;
        this.subject$.next();
      }

      this.hour = 0;
    }
  }
}

