import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Digimon } from 'src/app/shared/models/digimon.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-digimon-header',
  templateUrl: './digimon-header.component.html',
  styleUrls: ['./digimon-header.component.scss']
})
export class DigimonHeaderComponent implements OnInit {

  @Output() searchChange = new EventEmitter();
  search: string;
  digimomList: Array<Digimon>;

  @Input() set digimons(digimons: Digimon[]) {
    if (digimons !== this.digimomList) {
      this.digimomList = digimons;
    }
  }

  constructor(public authSvc: AuthService) { }

  ngOnInit() {
  }

  searchEvent(search): void {
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }

  onLogout(): void {
    this.authSvc.logout();
  }

  userCanSearch(): Observable<boolean> {
    return this.authSvc.userData$.pipe(
      map(user => { 
        if (!user) {
          console.log(user);
          return true;
        }
        return false;
      })
    );
  }

}
