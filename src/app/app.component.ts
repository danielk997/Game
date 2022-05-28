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
  blockType = 'basic';

  constructor(public game: Game) {
  }

  ngOnInit() {
    this.game.start();
  }

  onBlockTypeChange(event: any) {
    this.blockType = event.target.value;
  }

  onBlockAdd(block: Block<any>) {
    this.game.addBlock(block);
  }
}
