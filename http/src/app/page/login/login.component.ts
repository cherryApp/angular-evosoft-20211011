import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: User = new User();
  loginError: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    // private userService: UserService,
  ) { }

  ngOnInit(): void {
    // [1, 3, 4].forEach( id => {
    //   this.userService.update({id, password: 'test'}).subscribe( () => {} );
    // });
  }

  onLogin(): void {
    this.auth.login(this.loginData).subscribe(
      (user) => {
        if (user) {
          this.router.navigate(['/']);
        } else {
          this.loginError = 'Login failed!';
        }
      },
      err => {
        this.loginError = err.error;
      }
    )
  }

}
