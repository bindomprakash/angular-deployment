import { CanActivateFn } from '@angular/router';

export const loadsGuard: CanActivateFn = (route, state) => {
  return false;
};
