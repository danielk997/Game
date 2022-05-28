import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  basicRoadMap,
  RoadBL,
  RoadHorizontal,
  RoadMerge, RoadRB,
  RoadRBL,
  RoadTBL, RoadTL, RoadTR,
  RoadTRB,
  RoadTRL,
  RoadVertical
} from "../../models/game/blocks/roads/basic";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() blockTypeChange: EventEmitter<any> = new EventEmitter<any>();

  // roads = new Map<string, Block<Road>>([
  //   ['x', new RoadVertical()],
  //   ['y', new RoadVertical()],
  // ]);

  roads = [
    ...basicRoadMap.values()
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
