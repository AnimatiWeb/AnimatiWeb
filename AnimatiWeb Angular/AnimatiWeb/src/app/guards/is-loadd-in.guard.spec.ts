import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLoaddInGuard } from './is-loadd-in.guard';

describe('isLoaddInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLoaddInGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
