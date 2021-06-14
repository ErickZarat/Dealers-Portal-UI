import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../interfaces/User";
import {RestService} from "../rest.service";

@Injectable({
  providedIn: 'root'
})
export class UserService implements RestService<User> {

  constructor(protected http: HttpClient, @Inject('apiEndpoint') private endpoint: String) {
    this.endpoint = `${endpoint}/users`
  }

  create(user: User, dealerCode: number | null): Observable<User> {
    let code: number = dealerCode === null ? 0: dealerCode;
    return this.http.post<User>(`${this.endpoint}`, user, {params:{dealerCode: code}})
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.endpoint}/${code}`)
  }

  find(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}`)
  }

  findOne(code: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/${code}`)
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.endpoint}/${user.id}`, user)
  }
}
