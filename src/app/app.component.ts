import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game';
  blockType = 'basic';

  onBlockTypeChange(event: any) {
    this.blockType = event.target.value;
  }
}
