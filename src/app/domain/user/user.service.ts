import {Inject, Injectable} from '@angular/core';
import {User} from "./User";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http: HttpClient, @Inject('apiEndpoint') private endpoint: String) {
    console.log("Returned API Service");
  }

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
