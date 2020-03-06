import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private route: Router) {     
    this.userData$ = afAuth.authState;
  }

  loginByEmail(user: User) {
    const { email, password } = user; 
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.route.navigate(['/login']);
  }

  userCanSearch() : boolean {
    this.userData$.pipe(
      map(user => {
        if (user) {
          this.afs.doc<User>(`users/${user.uid}`).valueChanges().pipe(
            map(userStore => {
              console.log(userStore);
              return false;
            })
          );
        } else {
          return false;
;        }
      })
    );

    return false;
  }
}
