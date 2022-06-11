import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './containers/canvas/canvas.component';
import { MenuComponent } from './containers/menu/menu.component';
import { StatsComponent } from './containers/stats/stats.component';
import { GameDateComponent } from './containers/game-date/game-date.component';
import { StateButtonsComponent } from './containers/state-buttons/state-buttons.component';



@NgModule({
  declarations: [
    CanvasComponent,
    MenuComponent,
    StatsComponent,
    GameDateComponent,
    StateButtonsComponent
  ],
  exports: [
    CanvasComponent,
    MenuComponent,
    StatsComponent,
    GameDateComponent,
    StateButtonsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
