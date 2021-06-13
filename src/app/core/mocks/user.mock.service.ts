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

  showSource() {
    console.log("Usign MOCK Service")
  }

  createObservable<T>(value: T): Observable<T> {
    return new Observable( observer => {
      observer.next( value )
      observer.complete()
    })
  }

  create(user: User): Observable<User> {
    if (user.code === undefined) {
      user.code = this.currentId++;
    }
    this.users.push(user);
    return this.createObservable(user);
  }

  delete(code: number): Observable<boolean> {
    let deleted: boolean = false;
    let idx: number = this.users.findIndex(x => x.code === code)
    if (idx > -1) {
      this.users.splice(idx, 1)
      deleted = true
    }
    return this.createObservable(deleted);
  }

  find(dealerCode: number): Observable<User[]> {
    let users: Array<User> = this.users.filter(x => x.dealerCode === dealerCode)
    return this.createObservable(users);
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
    return this.createObservable(user);
  }

}
