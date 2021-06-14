import {Inject, Injectable} from '@angular/core';
import {RestService} from "../rest.service";
import {Product} from "../../interfaces/Product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements RestService<Product> {

  constructor(private http: HttpClient, @Inject('apiEndpoint') private endpoint: String) {
    this.endpoint = `${endpoint}/products`
  }

  create(product: Product, dealerCode: number | null): Observable<Product> {
    let code: number = dealerCode === null ? 0: dealerCode;
    return this.http.post<Product>(`${this.endpoint}`, product, {params:{dealerCode: code}})
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.endpoint}/${code}`)
  }

  find(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endpoint}`)
  }

  findOne(code: number): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}/${code}`)
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.endpoint}/${product.code}`, product)
  }
}
