import {Component, Input, OnInit} from '@angular/core';
import {Game, GameState} from "../../game";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
