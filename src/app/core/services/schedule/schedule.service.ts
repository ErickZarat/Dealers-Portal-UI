import {Inject, Injectable} from '@angular/core';
import {RestService} from "../rest.service";
import {Schedule} from "../../interfaces/Schedule";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements RestService<Schedule> {

  constructor(private http: HttpClient, @Inject('apiEndpoint') private endpoint: String) {
    this.endpoint = `${endpoint}/schedules`
  }

  create(schedule: Schedule, dealerCode: number | null): Observable<Schedule> {
    let code: number = dealerCode === null ? 0: dealerCode;
    return this.http.post<Schedule>(`${this.endpoint}`, schedule, {params:{dealerCode: code}})
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.endpoint}/${code}`)
  }

  find(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.endpoint}`)
  }

  findOne(code: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.endpoint}/${code}`)
  }

  update(schedule: Schedule): Observable<Schedule> {
    return this.http.put<Schedule>(`${this.endpoint}/${schedule.id}`, schedule)
  }
}
