import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserResolveService} from './service/resolve/user-resolve.service';


const routes: Routes = [
  {
    path: '', component: UsersComponent , resolve: {users: UserResolveService}, children: [
      {path: ':id', component: UserInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule {
}
