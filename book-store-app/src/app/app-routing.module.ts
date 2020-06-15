import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddUserComponent} from './admin/users/add-user/add-user.component';
import {UsersComponent} from './admin/users/users.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent},
  { path: 'admin/users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
