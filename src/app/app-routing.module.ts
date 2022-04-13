import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  { path: 'register', loadChildren: () => import('./auth/components/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./auth/components/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'info', loadChildren: () => import('./components/home/info/info.module').then(m => m.InfoModule) },
  { path: 'userProfile', loadChildren: () => import('./components/home/user-profile/user-profile.module').then(m => m.UserProfileModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
