import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  // In each of those components where we perform routing/navigation we must import RouterOutlet, RouterLink
  imports: [RouterOutlet, RouterLink, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing_in_angular';
  is_dashboard_route = false;
  page_not_found = false;
  userName:string = '';
  gender:string = '';
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

  checkPageFound():boolean{
    console.warn('this.router.url',this.router.url)
     return  this.router.url==='/page-not-found';
  }

  navigateToGreet(){
    if(this.userName.trim()){
      this.router.navigate(['/greet',this.gender,this.userName]);
    }
    else{
      alert('Please enter username to navigate to greet!!')
    }
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


//What are dynamic routes in Angular?
//basically the values in the dynamic routes are dynamic


//What are query params?
//Qyery params are the quereis which we add in our URL like below
// abc.com/?name=shahbaz


// What are fragments?
//Fragments are the different sections of your page.
// like my app has installation page so it's route is below
// abc.com/installation
// now installation page has 3 sections detail,short and preview
// If user selects shorts on the installation page so basically user
// selected a fragment of installation page and the url become
// abc.com/installation#short
// and when the above url hits it moves on the short named fragment of the installation page.


//Route guards and protect route are similar
// By using route guard we can make sure that if we don't want anyone to visit some particular routes without login
// Or non-admin user can't visit admin routes or pages etc.

// ng generate guard guardName by using this command we can generate a guard which protect our route on which weadd it.


//what are wildcard routes?
//In angular to catch the invalid or non-existent routes this concept is called as Wildcard Routes
//Means like 404 page not found etc.
// To redirect the invalid routes to page not found we use wildcard routes.

