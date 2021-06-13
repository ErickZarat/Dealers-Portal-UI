import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {DealerService} from "../services/dealer/dealer.service";
import {Dealer} from "../interfaces/Dealer";

@Injectable({
  providedIn: 'root'
})
export class DealerMockService extends DealerService {
  dealers: Array<Dealer> = [];
  currentId: number = 0;

  create(dealer: Dealer): Observable<Dealer> {
    if (dealer.code === undefined) {
      dealer.code = this.currentId++;
    }
    this.dealers.push(dealer);
    return of(dealer);
  }

  delete(code: number): Observable<boolean> {
    let deleted: boolean = false;
    let idx: number = this.dealers.findIndex(x => x.code === code)
    if (idx > -1) {
      this.dealers.splice(idx, 1)
      deleted = true
    }
    return of(deleted);
  }

  find(): Observable<Dealer[]> {
    return of(this.dealers);
  }

  findOne(code: number): Observable<Dealer> {
    let dealer: Dealer = <Dealer>this.dealers.find(x => x.code === code)
    return of(dealer);
  }

  update(dealer: Dealer): Observable<Dealer> {
    let idx: number = this.dealers.findIndex(x => x.code === dealer.code)
    if (idx > -1) {
      this.dealers[idx] = dealer
    }
    return of(dealer);
  }

}

