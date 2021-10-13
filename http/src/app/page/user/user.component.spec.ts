import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserServiceMock } from 'src/app/mocks/user.service.mock';
import { User } from 'src/app/model/user';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        {
          provide: UserService,
          useValue: UserServiceMock,
        },
        {
          provide: ConfigService,
          useValue: {
            userTableCols: []
          },
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('UserService.getAll have been called', () => {
    const fakeUser = new User();
    fakeUser.id = 77;
    fakeUser.lastName = 'Nagy';

    const fakeUserArray = [fakeUser, fakeUser];

    const getAllSpy = spyOn(userService, 'getAll');
    component.ngOnInit();

    expect(getAllSpy).toHaveBeenCalled();
  });
});
