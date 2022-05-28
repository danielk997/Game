export enum Prestige {
  LOW,
  NORMAL,
  HIGH
}

export interface Infrastructure {
  buildings: Building[];
  roads: Road[];
}

export interface Building {
  capability: number;
  prestige: Prestige;
}

export interface Road {

}
