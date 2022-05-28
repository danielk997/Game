import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BasicBlock, Block, RoadHorizontal, RoadMerge, RoadVertical} from "../../models/game/block";
import {Road} from "../../models/game/infrastructure";

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
    new RoadVertical(),
    new RoadHorizontal(),
    new RoadMerge(),
    new BasicBlock()
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
