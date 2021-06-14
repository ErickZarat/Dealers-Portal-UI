import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ScheduleService} from "../services/schedule/schedule.service";
import {Schedule} from "../interfaces/Schedule";

@Injectable({
  providedIn: 'root'
})
export class ScheduleMockService extends ScheduleService {

  url: string = 'api/schedules/'

  create(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.url, schedule)
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}${code}`)
  }

  find(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.url)
  }

  findOne(code: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.url}${code}`)
  }

  update(schedule: Schedule): Observable<Schedule> {
    if (schedule.id)
      return this.http.put<Schedule>(`${this.url}${schedule.id}`, schedule)
    return of();
  }

}
