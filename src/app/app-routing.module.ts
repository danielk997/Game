import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanvasComponent} from "./game/containers/canvas/canvas.component";

const routes: Routes = [
  {
    path: '',
    component: CanvasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
