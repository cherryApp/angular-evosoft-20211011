import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log(this.loginData);
  }

}
