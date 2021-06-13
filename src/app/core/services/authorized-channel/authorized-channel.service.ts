import {Inject, Injectable} from '@angular/core';
import {RestService} from "../rest.service";
import {AuthorizedChannel} from "../../interfaces/AuthorizedChannel";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthorizedChannelService implements RestService<AuthorizedChannel> {

  constructor(private http: HttpClient, @Inject('apiEndpoint') private endpoint: String) {
    this.endpoint = `${endpoint}/authorizedChannels`
  }

  create(authorizedChannel: AuthorizedChannel, dealerCode: number | null): Observable<AuthorizedChannel> {
    let code: number = dealerCode === null ? 0: dealerCode;
    return this.http.post<AuthorizedChannel>(`${this.endpoint}`, authorizedChannel, {params:{dealerCode: code}})
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.endpoint}/${code}`)
  }

  find(dealerCode: number | null): Observable<AuthorizedChannel[]> {
    let code: number = dealerCode === null ? 0: dealerCode;
    return this.http.get<Array<AuthorizedChannel>>(`${this.endpoint}`, {params:{dealerCode: code}})
  }

  findOne(code: number): Observable<AuthorizedChannel> {
    return this.http.get<AuthorizedChannel>(`${this.endpoint}/${code}`)
  }

  update(authorizedChannel: AuthorizedChannel): Observable<AuthorizedChannel> {
    return this.http.put<AuthorizedChannel>(`${this.endpoint}/${authorizedChannel.code}`, authorizedChannel)
  }
}
