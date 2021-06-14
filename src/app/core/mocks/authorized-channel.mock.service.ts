import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthorizedChannelService} from "../services/authorized-channel/authorized-channel.service";
import {AuthorizedChannel} from "../interfaces/AuthorizedChannel";

@Injectable({
  providedIn: 'root'
})
export class AuthorizedChannelMockService extends AuthorizedChannelService {
  url: string = 'api/authorized-channels/'

  create(authorizedChannel: AuthorizedChannel, dealerCode: number | null): Observable<AuthorizedChannel> {
    return this.http.post<AuthorizedChannel>(this.url, authorizedChannel)
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}${code}`)
  }

  find(): Observable<AuthorizedChannel[]> {
    return this.http.get<Array<AuthorizedChannel>>(`${this.url}`)
  }

  findOne(code: number): Observable<AuthorizedChannel> {
    return this.http.get<AuthorizedChannel>(`${this.url}${code}`)
  }

  update(authorizedChannel: AuthorizedChannel): Observable<AuthorizedChannel> {
    return this.http.put<AuthorizedChannel>(`${this.url}${authorizedChannel.code}`, authorizedChannel)
  }

}

