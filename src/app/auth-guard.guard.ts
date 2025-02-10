import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isLoggedIn: boolean = false;

  constructor(private router: Router) {
  }

  canActivate():boolean{
    if(this.isLoggedIn){
      alert('Welcome!')
      return true;
    }
    else{
      alert('Please Login First')
      this.router.navigate(['/login']);
      return false;
    }
  }

  toggleIsLoggedIn():void{
    this.isLoggedIn = !this.isLoggedIn;
  }
}
