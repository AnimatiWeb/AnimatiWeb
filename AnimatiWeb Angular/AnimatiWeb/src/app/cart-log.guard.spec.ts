import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cartLogGuard } from './cart-log.guard';

describe('cartLogGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cartLogGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
