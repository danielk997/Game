import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './containers/canvas/canvas.component';
import { MenuComponent } from './containers/menu/menu.component';
import { StatsComponent } from './containers/stats/stats.component';



@NgModule({
  declarations: [
    CanvasComponent,
    MenuComponent,
    StatsComponent
  ],
    exports: [
        CanvasComponent,
        MenuComponent,
        StatsComponent
    ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
