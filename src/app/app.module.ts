import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DigimonHomepageComponent } from './components/pages/digimon-homepage/digimon-homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { DigimonHeaderComponent } from './components/pages/digimon-header/digimon-header.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/pages/auth/login/login.component';

/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { DigimonContentComponent } from './components/pages/digimon-content/digimon-content.component';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    DigimonHomepageComponent,
    DigimonHeaderComponent,
    DigimonContentComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
