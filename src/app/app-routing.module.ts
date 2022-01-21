import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardGuard } from './guards/route-guard.guard';
import { LandingPageComponent } from './screens/landingPage/landing-page/landing-page.component';
import { PerksComponent } from './screens/perks/perks/perks.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path:"",
    component: NavBarComponent,
    canActivate:[RouteGuardGuard],
    
    children:[
      {
        path:"home",
        component: LandingPageComponent
      },
      {
        path:"perks",
        component: PerksComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
