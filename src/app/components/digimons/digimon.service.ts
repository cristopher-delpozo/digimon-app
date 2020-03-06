import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Digimon } from 'src/app/shared/models/digimon.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  digimonAPI: any;

  constructor(private http: HttpClient) { 
    this.digimonAPI = environment.digimonURL;
  }

  getDigimons(): Observable<Digimon[]> {
    return this.http
      .get<Digimon[]>(`${this.digimonAPI}`)
      .pipe(catchError(this._handleError));
  }
  
  getDigimonById(id): Observable<Digimon[]> {
    return this.http
      .get<Digimon[]>(`${this.digimonAPI}/id/${id}`)
      .pipe(catchError(this._handleError));
  }

  getDigimonByName(name): Observable<Digimon[]> {
    return this.http
      .get<Digimon[]>(`${this.digimonAPI}/name/${name}`)
      .pipe(catchError(this._handleError));
  }

  getDigimonByLevel(level): Observable<Digimon[]> {
    return this.http
      .get<Digimon[]>(`${this.digimonAPI}/level/${level}`)
      .pipe(catchError(this._handleError));
  }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else {
      console.error(
        `El backend retornó el código ${error.status}, ` + `el body fue: ${error.error}`
      );
    }

    return throwError('Algo malo pasó. Favor intentalo más tarde');
  }
}
