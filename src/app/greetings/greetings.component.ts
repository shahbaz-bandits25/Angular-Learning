import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.css'
})
export class GreetingsComponent implements OnInit {
  gender_param: string | null ='';
  username_param: string | null ='';


  //here ActivatedRoute is a service which tells us the query params in the url
  // as well as it tells us the which dynamic values , or fragments are in url etc
  constructor(private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    //here below line this.route.snapshot.paramMap.get('name') give us the value of the parameter
    // named as name
    // remember yahan hamesha get ma wohi value enter krna jo route ma : k bad use ki thi
    this.gender_param = this.route.snapshot.paramMap.get('gender');
    this.username_param = this.route.snapshot.paramMap.get('name');
  }

}
