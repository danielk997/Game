import {Component, OnInit} from '@angular/core';
import {Game} from "./game/game";
import {Block} from "./game/models/game/block";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'game';
  blockName = 'basic';

  constructor(public game: Game) {
  }

  ngOnInit() {
    this.game.start();
  }

  onBlockTypeChange(block: Block<any>) {
    this.blockName = block.name;
  }

  onBlockAdd(block: Block<any>) {
    this.game.addBlock(block);
  }
}
