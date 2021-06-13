import {Observable} from "rxjs";

export interface RestService<T> {
  create(item: T): Observable<T>;
  delete(code: number): Observable<boolean>;
  find(itemCode: number): Observable<T[]>;
  findOne(code: number): Observable<T>;
  update(item: T): Observable<T>;
}
