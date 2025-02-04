import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  // In each of those components where we perform routing/navigation we must import RouterOutlet, RouterLink
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing_in_angular';
  is_dashboard_route = false;
  constructor(private router:Router) {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.is_dashboard_route = event.url.startsWith('/dashboard');
      }
    })
  }

  goToDashboard(){
    this.router.navigate(['dashboard']);
  }

}


// Video 40,41,42 done

//What's Routing
//Navigation b/w different pages or components.
// It helps to display specific content based on the URL without reloading the entire app.

//Terminologies in Routing
//****ROUTE****
// Route is basically a configuration object in it we define the path and it's content.
// Means hum URL btate hain eis ma or ous URL pe konsa component load krwana ha

//****ROUTER LINK****
// it's a directive which creates different routes

//****ACTIVATED ROUTE****
// By using it we can access the specific info of the route
// like agr koi route apne sth koi params le k aya ha

//****ROUTE GUARDS****
// Yeh hum apne routes ko protect krne k lye use krte hain like without login koi
// hmare route ko access nhi kr ske etc etc.



// Child Routes / Nested Routes
//the routes which are accessed through some other routes
//let's say if we've dashboard route,profile route and settings route
//profile route and settings route are child of dashboard
//so the url becomes dashboard/settings
