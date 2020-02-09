import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DigimonHomepageComponent } from './components/pages/digimon-homepage/digimon-homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    DigimonHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
