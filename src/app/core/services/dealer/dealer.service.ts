import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dealer} from "../interfaces/Dealer";
import {RestService} from "./rest.service";


@Injectable({
  providedIn: 'root'
})
export class DealerService implements RestService<Dealer> {

  constructor(private http: HttpClient, @Inject('apiEndpoint') private endpoint: String) {
    this.endpoint = `${endpoint}/dealers`
  }

  create(dealer: Dealer): Observable<Dealer> {
    return this.http.post<Dealer>(`${this.endpoint}`, dealer)
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.endpoint}/${code}`)
  }

  find(): Observable<Dealer[]> {
    return this.http.get<Dealer[]>(`${this.endpoint}`)
  }

  findOne(code: number): Observable<Dealer> {
    return this.http.get<Dealer>(`${this.endpoint}/${code}`)
  }

  update(dealer: Dealer): Observable<Dealer> {
    return this.http.put<Dealer>(`${this.endpoint}/${dealer.code}`, dealer)
  }
}
