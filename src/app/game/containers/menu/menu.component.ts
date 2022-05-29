import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {basicRoadMap} from "../../models/game/blocks/roads/basic";
import {basicBuildingMap} from "../../models/game/blocks/buildings/basic";
import {BlockType, RemoveBlock} from "../../models/game/block";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() blockTypeChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() blockName!: string;
  blockType: BlockType = BlockType.ROAD;
  BlockType = BlockType;

  roads = [
    new RemoveBlock(),
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
