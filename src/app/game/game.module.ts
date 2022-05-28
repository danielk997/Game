import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './containers/canvas/canvas.component';
import { MenuComponent } from './containers/menu/menu.component';



@NgModule({
  declarations: [
    CanvasComponent,
    MenuComponent
  ],
  exports: [
    CanvasComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
