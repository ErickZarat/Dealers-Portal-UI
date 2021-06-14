import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ProductService} from "../services/product/product.service";
import {Product} from "../interfaces/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductMockService extends ProductService {
  url: string = 'api/products/'

  create(authorizedChannel: Product, dealerCode: number | null): Observable<Product> {
    return this.http.post<Product>(this.url, authorizedChannel)
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}${code}`)
  }

  find(): Observable<Product[]> {
    return this.http.get<Array<Product>>(`${this.url}`)
  }

  findOne(code: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}${code}`)
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}${product.id}`, product)
  }
}
