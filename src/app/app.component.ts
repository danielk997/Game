import {Component, OnInit} from '@angular/core';
import {Game, GameDate} from "./game/game";
import {Block} from "./game/models/game/block";
import {StorageService} from "./storage.service";
import {Infrastructure, InfrastructureUnit} from "./game/models/game/infrastructure";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'game';
  blockName = 'Remove';
  infrastructure?: Infrastructure;

  constructor(
    public game: Game,
  ) {
  }

  ngOnInit() {
    this.game.start();
  }

  onBlockTypeChange(block: Block<any>) {
    this.blockName = block.name;
  }

  onBlockAdd(block: Block<any>) {
    console.log('BLOCK', block);
    this.game.addBlock(block);
  }

  onBlockRemove(block: Block<any>) {
    this.game.removeBlock(block);
  }

  onLoadGame() {
    const state = StorageService.getItem('gameState')

    if (!state) {
      alert('No data to load')
      return;
    }

    const date = state.date;

    this.game.state = {
      ...state
    };

    this.game.state.date = new GameDate({
      hour: date.hour,
      day: date.day,
      week: date.week
    });

    this.infrastructure = this.game.state.infrastructure;
  }

  onSaveGame() {
    const stateToSave = {
      ...this.game.state,
      date: {
        hour: this.game.state.date.hour,
        day: this.game.state.date.day,
        week: this.game.state.date.week,
      }
    }
    StorageService.setItem('gameState', stateToSave);
    alert('Game saved');
  }

  remove() {
    console.log(this.game.getTax())
  }

  // private getFramesFromState(state: GameState): CanvasFrame[] {
  //   const infrastructure = state.infrastructure;
  //   const roadFrames = infrastructure.roads.map(it => it.frame!);
  //   const buildingFrames = infrastructure.buildings.map(it => it.frame!);
  //
  //   return [...roadFrames, ...buildingFrames];
  // }
}
