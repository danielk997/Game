import {Component, Input, OnInit} from '@angular/core';
import {GameState} from "../../game";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() gameState!: GameState;

  constructor() { }

  ngOnInit(): void {
  }

}
