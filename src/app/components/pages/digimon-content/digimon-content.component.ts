import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Digimon } from "src/app/shared/models/digimon.interface";
import { DigimonService } from '../../digimons/digimon.service';

@Component({
  selector: "app-digimon-content",
  templateUrl: "./digimon-content.component.html",
  styleUrls: ["./digimon-content.component.scss"]
})
export class DigimonContentComponent implements OnInit {
  @Output() exportDigimons = new EventEmitter();
  digimonsLoaded: boolean;
  digimons: Digimon[];
  query: string;

  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }
  
  constructor(private digimonService: DigimonService) { }

  ngOnInit() {
    this.digimonsLoaded = false;
    this.getDigimons();
  }

  getDigimons(): void {
    this.digimonService.getDigimons().subscribe((data: Digimon[]) => {
      this.digimons = data;
      this.digimonsLoaded = true;
      this.exportDigimons.emit(this.digimons);
    });
  }
}
