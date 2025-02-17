import { Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {SettingsComponent} from "./settings/settings.component";
import {GreetingsComponent} from "./greetings/greetings.component";
import {QueryFragmentComponent} from "./query-fragment/query-fragment.component";
import {LoginComponent} from "./login/login.component";
import {PersonalComponent} from "./personal/personal.component";
import {AuthGuard} from "./auth-guard.guard";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

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
//   {path:'greet/:gender/:name' , component:GreetingsComponent},

//   here I'll apply lazy loading on the Greet Component
  {path:'greet/:gender/:name', loadComponent:() =>
          import('./greetings/greetings.component').then((c)=>
            c.GreetingsComponent
          ),
  },

//   below we're creating route to learn query fragments
  {path:'query-fragment', component:QueryFragmentComponent},
  {path:'login', component:LoginComponent},

//   here in below personal component's route I'll implement the auth guard to make it protected and
//   without loggedin user can't access it
//   to protect this route we use our newly created auth guard
  {path:'personal', component:PersonalComponent, canActivate:[AuthGuard]},

//   below we're adding the wildcard route
//   it's the route of our page not found page if any link is not found
  {path:'page-not-found', component:PageNotFoundComponent},

//   now how we get to know user hitted the link which is not in our app?
  //we add the ** to catch the non-existent and invalid routes
  {path:'**',redirectTo:'page-not-found'},

];
