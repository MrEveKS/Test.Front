import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'user/list', pathMatch: 'full' },
  // { path: 'test-list', component: UserListComponent },
  { path: 'user', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },
  // { path: 'test', loadChildren: () => import('./components/test/test.module').then(m => m.TestModule)},
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
