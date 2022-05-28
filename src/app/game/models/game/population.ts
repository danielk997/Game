import {randomInteger} from "../../../utils/common";

export interface Population {
  citizens: Citizen[];
}

export interface Citizen {
  age: number;
  profession: Profession;
}

export interface Profession {
  name: string;
  earnings: number;
}

export class FactoryWorker implements Profession {
  name = 'Factory worker';
  earnings = randomInteger(2000, 4000);
}

export class DefaultCitizen implements Citizen {
  age = randomInteger(20, 50);
  profession: Profession;

  constructor() {
    this.profession = this.randomProfession();
  }

  private randomProfession(): Profession {
    switch (randomInteger(1, 3)) {
      case 1:
        return new FactoryWorker();
      default:
        return new FactoryWorker();
    }
  }
}
