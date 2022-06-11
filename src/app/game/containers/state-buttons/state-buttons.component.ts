import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-state-buttons',
  templateUrl: './state-buttons.component.html',
  styleUrls: ['./state-buttons.component.scss']
})
export class StateButtonsComponent implements OnInit {

  @Output() save: EventEmitter<void> = new EventEmitter<void>();
  @Output() load: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
