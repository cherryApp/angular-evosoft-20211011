import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';
import { faEdit, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  userList$: BehaviorSubject<User[]> = this.userService.list$;

  cols: ITableColumn[] = this.config.userTableCols;

  icons: {[key: string]: IconDefinition} = {
    faTrash,
    faEdit,
  };

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
    if (!confirm('Are you sure?')) {
      return;
    }

    this.userService.delete(user.id).subscribe(
      () => {},
      err => alert(`Delete User ${user.id} is failed.`),
    );
  }

  onUpdate(user: User): void {

  }


  ngOnDestroy() {}

}
