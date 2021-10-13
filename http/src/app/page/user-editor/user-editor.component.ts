import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { USER_INFO, USER_PROVIDER } from 'src/app/providers/user.provider';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss'],
  providers: [
    USER_PROVIDER,
  ],
})
export class UserEditorComponent implements OnInit {

  // user$: Observable<User> = this.activatedRoute.params.pipe(
  //   switchMap( params => this.userService.get(params.id) )
  // );

  // user!: User;

  constructor(
    @Inject(USER_INFO) readonly user$: Observable<User>,
  ) { }

  ngOnInit() {
    // this.getUser();
  }

  // async getUser() {
  //   const params = await this.activatedRoute.params.pipe(
  //     take(1),
  //   ).toPromise();
  //   this.user = await this.userService.get(params.id).toPromise();
  //   this.cdr.detectChanges();
  // }

}
