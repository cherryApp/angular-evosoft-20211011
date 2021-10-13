import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserServiceMock } from 'src/app/mocks/user.service.mock';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
