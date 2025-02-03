import { Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  // it's a default route if user enter nothing it should redirect to the home page
  {path: '', redirectTo: 'home', pathMatch: 'full'},
//   it's the path if user gives home path it should load the home component
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},

];
