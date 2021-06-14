import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {UserService} from "../services/user/user.service";
import {User} from "../interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class UserMockService extends UserService {
  url: string = 'api/users/'

  create(user: User, dealerCode: number | null): Observable<User> {
    return this.http.post<User>(this.url, user)
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}${code}`)
  }

  find(): Observable<User[]> {
    return this.http.get<Array<User>>(`${this.url}`)
  }

  findOne(code: number): Observable<User> {
    return this.http.get<User>(`${this.url}${code}`)
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}${user.id}`, user)
  }
}
