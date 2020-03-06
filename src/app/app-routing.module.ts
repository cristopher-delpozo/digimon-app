import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { DigimonHomepageComponent } from './components/pages/digimon-homepage/digimon-homepage.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path : 'login', component: LoginComponent },
  { path : 'home', component: DigimonHomepageComponent, canActivate : [AuthGuard] },
  { path : '', pathMatch : 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
