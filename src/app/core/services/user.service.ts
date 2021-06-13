import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces/User";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class UserService implements RestService<User> {

  constructor(private http: HttpClient, @Inject('apiEndpoint') private endpoint: String) { }

  showSource() {
    console.log("Using REST API Service");
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.endpoint}/dealer/${user.dealerCode}/user`, user)
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>("")
  }

  find(dealerCode: number): Observable<User[]> {
    return this.http.get<Array<User>>("")
  }

  findOne(code: number): Observable<User> {
    return this.http.get<User>("")
  }

  update(user: User): Observable<User> {
    return this.http.put<User>("", user)
  }
}
