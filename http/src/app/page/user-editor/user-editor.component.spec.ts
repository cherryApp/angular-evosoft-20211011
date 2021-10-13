import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserServiceMock } from 'src/app/mocks/user.service.mock';
import { UserService } from 'src/app/service/user.service';
import { RouterTestingModule } from '@angular/router/testing';

import { UserEditorComponent } from './user-editor.component';

describe('UserEditorComponent', () => {
  let component: UserEditorComponent;
  let fixture: ComponentFixture<UserEditorComponent>;

  beforeEach(async () => {
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
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
