import { CanActivateFn } from '@angular/router';

export const authsGuard: CanActivateFn = (route, state) => {

 let admin = localStorage.getItem("admin");
  if(admin && admin==="ADMIN"){
    return true;
  }else{
    return false;
  }
};
