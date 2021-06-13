import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {UserService} from "../services/user/user.service";
import {User} from "../interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class UserMockService extends UserService {
  users: Array<User> = [];
  currentId: number = 0;

  create(user: User, dealerCode: number | null): Observable<User> {
    if (user.code === undefined) {
      user.code = this.currentId++;
    }
    user.dealerCode = dealerCode
    this.users.push(user);
    return of(user);
  }

  delete(code: number): Observable<boolean> {
    let deleted: boolean = false;
    let idx: number = this.users.findIndex(x => x.code === code)
    if (idx > -1) {
      this.users.splice(idx, 1)
      deleted = true
    }
    return of(deleted);
  }

  find(dealerCode: number | null): Observable<User[]> {
    let users: Array<User> = this.users.filter(x => x.dealerCode === dealerCode)
    return of(users);
  }

  findOne(code: number): Observable<User> {
    let user: User = <User>this.users.find(x => x.code === code)
    return of(user);
  }

  update(user: User): Observable<User> {
    let idx: number = this.users.findIndex(x => x.code === user.code)
    if (idx > -1) {
      this.users[idx] = user
    }
    return of(user);
  }

}
