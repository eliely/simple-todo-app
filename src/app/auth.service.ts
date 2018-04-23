import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from './shared/models/user.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  // BASE_URL = 'localhost:4200/';
  isLoggedIn = false;

  redirectUrl = '/dashboard';

  constructor(private router: Router) {
    this.isLoggedIn = false;
  }

  login(loginData: User) {
    console.log(loginData);
    // this.httpClient.post(this.BASE_URL +  'user/login', {loginData})
    //   .subscribe(
    //     response => {console.log(response);
    //       this.isLoggedIn = true;
    //       this.router.navigate([this.redirectUrl]); },
    //     error => console.log(error)
    //     );
    return Observable.of(true).delay(1000).do(val => {
      this.isLoggedIn = true;
      this.router.navigate([this.redirectUrl]);
    });
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
