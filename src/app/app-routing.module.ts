import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authsGuard } from './gaurd/auths.guard';
import { loadsGuard } from './gaurd/loads.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { multigaurdGuard } from './gaurd/multigaurd.guard';

const routes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [authsGuard] },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule), canActivate:[authsGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canMatch:[multigaurdGuard] },
  { path: 'admin', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log("about module loaded..");

  }
}
