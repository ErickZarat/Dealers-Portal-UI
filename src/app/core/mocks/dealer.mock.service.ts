import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {DealerService} from "../services/dealer/dealer.service";
import {Dealer} from "../interfaces/Dealer";

@Injectable({
  providedIn: 'root'
})
export class DealerMockService extends DealerService {
  url: string = 'api/dealers/'

  create(dealer: Dealer): Observable<Dealer> {
    return this.http.post<Dealer>(this.url, dealer)
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}${code}`)
  }

  find(): Observable<Dealer[]> {
    return this.http.get<Array<Dealer>>(`${this.url}`)
  }

  findOne(code: number): Observable<Dealer> {
    return this.http.get<Dealer>(`${this.url}${code}`)
  }

  update(dealer: Dealer): Observable<Dealer> {
    return this.http.put<Dealer>(`${this.url}${dealer.code}`, dealer)
  }

}

