export enum Prestige {
  LOW,
  NORMAL,
  HIGH
}

export interface Infrastructure {
  buildings: Building[];
  roads: Road[];
}

export interface InfrastructureUnit {
  maintenanceCost: number;
  lifeQuality: number;
}

export interface Building extends InfrastructureUnit {
  capability: number;
  prestige: Prestige;
}

export interface Road extends InfrastructureUnit {

}
