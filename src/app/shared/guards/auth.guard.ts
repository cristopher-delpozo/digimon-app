import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSvc: AuthService, private router: Router) { }
  
  canActivate(): Observable<boolean> { 
    return this.authSvc.user$.pipe(
      take(1),
      map(user => {
        if (!user) {
          this.router.navigate(['/login']); 
          return false;
        }
        return true;
      })
    );
  }
  
}