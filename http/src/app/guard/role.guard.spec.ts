import { TestBed } from '@angular/core/testing';
import { AuthServiceMock } from '../mocks/auth.service.mock';
import { AuthService } from '../service/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';

import { RoleGuard } from './role.guard';

describe('RoleGuard', () => {
  let guard: RoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [
        {
          provide: AuthService,
          useValue: AuthServiceMock,
        },
      ]
    });
    guard = TestBed.inject(RoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
