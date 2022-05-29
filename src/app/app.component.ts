import {Component, OnInit} from '@angular/core';
import {Game} from "./game/game";
import {Block, BlockType} from "./game/models/game/block";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'game';
  blockName = 'Remove';

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

  onBlockRemove(block: Block<any>) {
    this.game.removeBlock(block);
  }

  remove() {
    console.log(this.game.getTax())
  }
}
