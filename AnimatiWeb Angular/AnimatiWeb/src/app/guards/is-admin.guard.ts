import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserService } from '../services/user/user.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const username = sessionStorage.getItem('AnimatiWeb');
  if (username) {
    return true;
  } else {
    router.navigateByUrl('/agregarproductos');
    return false;
  }
};
