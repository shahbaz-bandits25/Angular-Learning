import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // In each of those components where we perform routing/navigation we must import RouterOutlet, RouterLink
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing_in_angular';
}


// Video 41,42 done

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





