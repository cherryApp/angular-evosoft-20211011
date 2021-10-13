import { TestBed } from '@angular/core/testing';
import { AuthService } from '../service/auth.service';

import { JwtInterceptor } from './jwt.interceptor';



describe('JwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtInterceptor,
      {
        provide: AuthService,
        useValue: {
          login: () => {},
          logout: () => {},
        },
      },
    ],
  }));

  it('should be created', () => {
    const interceptor: JwtInterceptor = TestBed.inject(JwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
