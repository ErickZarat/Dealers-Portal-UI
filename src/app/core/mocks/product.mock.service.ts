import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ProductService} from "../services/product/product.service";
import {Product} from "../interfaces/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductMockService extends ProductService {
  products: Array<Product> = [];
  currentId: number = 0;

  create(product: Product, dealerCode: number | null): Observable<Product> {
    if (product.code === undefined) {
      product.code = this.currentId++;
    }
    product.dealerCode = dealerCode
    this.products.push(product);
    return of(product);
  }

  delete(code: number): Observable<boolean> {
    let deleted: boolean = false;
    let idx: number = this.products.findIndex(x => x.code === code)
    if (idx > -1) {
      this.products.splice(idx, 1)
      deleted = true
    }
    return of(deleted);
  }

  find(): Observable<Product[]> {
    return of(this.products);
  }

  findOne(code: number): Observable<Product> {
    let product: Product = <Product>this.products.find(x => x.code === code)
    return of(product);
  }

  update(product: Product): Observable<Product> {
    let idx: number = this.products.findIndex(x => x.code === product.code)
    if (idx > -1) {
      this.products[idx] = product
    }
    return of(product);
  }

}
