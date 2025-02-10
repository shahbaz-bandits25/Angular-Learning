import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthGuard} from "../auth-guard.guard";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router,private auth_guard:AuthGuard) {
  }

  login(){
    this.auth_guard.toggleIsLoggedIn()
    this.router.navigate(['/personal']);
  }
}
