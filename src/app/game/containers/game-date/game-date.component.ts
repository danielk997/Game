import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../game";

@Component({
  selector: 'app-game-date',
  templateUrl: './game-date.component.html',
  styleUrls: ['./game-date.component.scss']
})
export class GameDateComponent implements OnInit {

  @Input() game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
