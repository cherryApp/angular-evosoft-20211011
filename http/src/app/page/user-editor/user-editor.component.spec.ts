import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { UserServiceMock } from 'src/app/mocks/user.service.mock';
import { UserService } from 'src/app/service/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { UserEditorComponent } from './user-editor.component';
import { USER_INFO } from 'src/app/providers/user.provider';
import { of, Subject } from 'rxjs';
import { User } from 'src/app/model/user';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('UserEditorComponent', () => {
  let component: UserEditorComponent;
  let fixture: ComponentFixture<UserEditorComponent>;
  const userSubject$: Subject<User> = new Subject();
  let userService: UserService;

  const mockUser: User = new User();
  mockUser.id = 22;
  mockUser.lastName = 'Kiss';
  mockUser.firstName = 'Géza';
  mockUser.email = 'kiss.geza@gmail.com';

  beforeEach(async () => {
    TestBed.overrideComponent(UserEditorComponent,
      {
        set: {
          providers: [
            {
              provide: USER_INFO,
              useValue: userSubject$,
            },
          ],
        },
      });
    await TestBed.configureTestingModule({
      declarations: [ UserEditorComponent ],
      providers: [
        {
          provide: UserService,
          useValue: UserServiceMock,
        }
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditorComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the user will be a real User object', fakeAsync(() => {
    userSubject$.next(mockUser);
    fixture.detectChanges();
    tick();
    const inputElement = By.css('input[name=email]');
    const debugElement = fixture.debugElement.query(inputElement);
    expect(debugElement.nativeElement.value).toBe('kiss.geza@gmail.com');
  }));

});
