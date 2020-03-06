import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DigimonService } from '../../digimons/digimon.service';
import { Digimon } from 'src/app/shared/models/digimon.interface';

@Component({
  selector: 'app-digimon-homepage',
  templateUrl: './digimon-homepage.component.html',
  styleUrls: ['./digimon-homepage.component.scss']
})
export class DigimonHomepageComponent implements OnInit {
  public search: string;
  public digimons: Array<Digimon>;
  
  constructor() { }

  ngOnInit() {
  }

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
