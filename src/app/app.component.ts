import { Component } from '@angular/core';
import { Digimon } from './shared/models/digimon.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digimon-app';
  public search: string;
  public digimons: Array<Digimon>;

  newDigimonSearch(search: string): void {
    if (this.search !== search) {
      this.search = search;
    }
  }

  exportDigimons(digimons: Array<Digimon>): void {
    if (this.digimons !== digimons) {
      this.digimons = digimons;
    }
  }
}
