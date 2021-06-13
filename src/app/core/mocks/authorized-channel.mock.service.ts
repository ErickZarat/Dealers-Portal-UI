import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthorizedChannelService} from "../services/authorized-channel/authorized-channel.service";
import {AuthorizedChannel} from "../interfaces/AuthorizedChannel";

@Injectable({
  providedIn: 'root'
})
export class AuthorizedChannelMockService extends AuthorizedChannelService {
  authorizedChannels: Array<AuthorizedChannel> = [];
  currentId: number = 0;

  create(authorizedChannel: AuthorizedChannel, dealerCode: number | null): Observable<AuthorizedChannel> {
    if (authorizedChannel.code === undefined) {
      authorizedChannel.code = this.currentId++;
    }
    authorizedChannel.dealerCode = dealerCode
    this.authorizedChannels.push(authorizedChannel);
    return of(authorizedChannel);
  }

  delete(code: number): Observable<boolean> {
    let deleted: boolean = false;
    let idx: number = this.authorizedChannels.findIndex(x => x.code === code)
    if (idx > -1) {
      this.authorizedChannels.splice(idx, 1)
      deleted = true
    }
    return of(deleted);
  }

  find(dealerCode: number | null): Observable<AuthorizedChannel[]> {
    let authorizedChannels: Array<AuthorizedChannel> = this.authorizedChannels.filter(x => x.dealerCode === dealerCode)
    return of(authorizedChannels);
  }

  findOne(code: number): Observable<AuthorizedChannel> {
    let authorizedChannel: AuthorizedChannel = <AuthorizedChannel>this.authorizedChannels.find(x => x.code === code)
    return of(authorizedChannel);
  }

  update(authorizedChannel: AuthorizedChannel): Observable<AuthorizedChannel> {
    let idx: number = this.authorizedChannels.findIndex(x => x.code === authorizedChannel.code)
    if (idx > -1) {
      this.authorizedChannels[idx] = authorizedChannel
    }
    return of(authorizedChannel);
  }

}

