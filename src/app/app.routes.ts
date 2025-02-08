import { Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {SettingsComponent} from "./settings/settings.component";
import {GreetingsComponent} from "./greetings/greetings.component";

export const routes: Routes = [
  // it's a default route if user enter nothing it should redirect to the home page
  {path: '', redirectTo: 'home', pathMatch: 'full'},
//   it's the path if user gives home path it should load the home component
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
//   here how we can create the child routes
//   for example if we've a parent route named Dashboard
//   and it's child routes are settings and profile
  {path: 'dashboard', component: DashboardComponent,
    children:[
      {path: 'profile', component: ProfileComponent},
      {path: 'settings', component: SettingsComponent},
    ]
  },

//   below is the example of the dynamic route
//   here in below path the value after : is the dynamic or it's kind of a variable
//   by below you can send single dynamic parm value
//   {path:'greet/:name' , component:GreetingsComponent}
//   by below code you can send multiple dynamic values
  {path:'greet/:gender/:name' , component:GreetingsComponent}

];
