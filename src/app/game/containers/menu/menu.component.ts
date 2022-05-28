import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {basicRoadMap} from "../../models/game/blocks/roads/basic";
import {basicBuildingMap} from "../../models/game/blocks/buildings/basic";
import {BlockType} from "../../models/game/block";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() blockTypeChange: EventEmitter<any> = new EventEmitter<any>();
  blockType: BlockType = BlockType.ROAD;
  BlockType = BlockType;

  roads = [
    ...basicRoadMap.values()
  ]

  buildings = [
    ...basicBuildingMap.values()
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onBlockTypeChange(type: BlockType) {
    this.blockType = type;
  }
}
