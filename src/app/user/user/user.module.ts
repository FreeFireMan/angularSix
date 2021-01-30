import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import {UserResolveService} from './service/resolve/user-resolve.service';
import {UserService} from './service/user.service';


@NgModule({
  declarations: [UsersComponent, UserComponent, UserInfoComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [UserResolveService, UserService]
})
export class UserModule { }
