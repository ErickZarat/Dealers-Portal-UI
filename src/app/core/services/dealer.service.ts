import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dealer} from "../interfaces/Dealer";


@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private http: HttpClient) { }

  getDealers(): Observable<Dealer> {
    return this.http.get<Dealer>('products')
  }

}
