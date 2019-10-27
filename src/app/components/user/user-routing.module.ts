import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserAddComponent } from './add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'add', redirectTo: 'add/0', pathMatch: 'full' },
  { path: 'add/:id', component: UserAddComponent },
  { path: 'list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
