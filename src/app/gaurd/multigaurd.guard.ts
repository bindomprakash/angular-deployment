import { CanActivateFn } from '@angular/router';

export const multigaurdGuard: CanActivateFn = (route, state) => {
  const admin = localStorage.getItem("admin");
  if (admin && admin === "ADMIN") {
    return true;
  }
  return false;
};
