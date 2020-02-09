import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../../digimons/digimon.service';
import { Digimon } from 'src/app/shared/models/digimon.interface';

@Component({
  selector: 'app-digimon-homepage',
  templateUrl: './digimon-homepage.component.html',
  styleUrls: ['./digimon-homepage.component.scss']
})
export class DigimonHomepageComponent implements OnInit {
  digimonsLoaded: boolean;
  digimons: Digimon[]
  
  constructor(private digimonService: DigimonService) { }

  ngOnInit() {
    this.digimonsLoaded = false;
    this.getDigimons();
  }

  getDigimons(): void {
    this.digimonService.getDigimons().subscribe((data: Digimon[]) => {
      this.digimons = data;
      this.digimonsLoaded = true;
    });
  }

}
