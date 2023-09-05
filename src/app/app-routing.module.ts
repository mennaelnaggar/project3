import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TvshowsComponent  } from './tvshows/tvshows.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TvdetailsComponent  } from './tvdetails/tvdetails.component';

 
const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'tvshows',component:TvshowsComponent},
  { path:'about',component:AboutComponent},
  { path:'contact-us',component:ContactUsComponent},
  { path:'tvdetails',component: TvdetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
