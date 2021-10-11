import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { User } from './model/user';
import { ConfigService, ITableColumn } from './service/config.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'http';
  userSubscription: Subscription = new Subscription();

  // users$: Observable<User[]> = this.userService.getAll();
  userList$: BehaviorSubject<User[]> = this.userService.list$;

  cols: ITableColumn[] = this.config.userTableCols;

  constructor(
    private userService: UserService,
    private config: ConfigService,
  ) {}

  ngOnInit() {
    this.userService.getAll();
    // this.userSubscription = this.userService.getAll().subscribe(
    //   users => console.log(users),
    //   err => console.error(err),
    //   () => console.log('complete'),
    // );
  }

  onDelete(user: User): void {
    this.userService.delete(user.id).subscribe(
      () => {},
      err => alert(`Delete User ${user.id} is failed.`),
    );
  }

  onUpdate(user: User): void {

  }


  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
