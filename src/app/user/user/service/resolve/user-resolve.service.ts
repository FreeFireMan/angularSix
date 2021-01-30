import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IUser} from '../../interface/user-i';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser[]>{

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userService.getAllUser();
  }
}
