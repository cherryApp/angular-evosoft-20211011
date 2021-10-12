import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

export interface IMyStorage extends Storage {
  currentUser: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl;

  currentUserSubject$: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  lastToken: string = '';
  loginUrl: string = `${this.apiUrl}/login`;
  storage: IMyStorage = localStorage as IMyStorage;


  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    if (this.storage.currentUser) {
      const user: User = JSON.parse(this.storage.currentUser);
      this.lastToken = user.accessToken || '';
      this.currentUserSubject$.next(user);
    } else {
      this.logout();
    }
  }

  login(loginData: User): Observable<User | null> {
    return this.http.post<{user: User, accessToken: string}>(
      this.loginUrl,
      loginData,
    ).pipe(
      map( response => {
        if (response.user && response.accessToken) {
          this.lastToken = response.accessToken;
          response.user.accessToken = response.accessToken;
          this.currentUserSubject$.next(response.user);
          this.storage.currentUser = JSON.stringify(response.user);
          return response.user;
        }
        return null;
      })
    )
  }

  logout(): void {
    this.lastToken = '';
    this.currentUserSubject$.next(null);
    this.storage.removeItem('currentUser');
    this.router.navigate(['/', 'login']);
  }
}
