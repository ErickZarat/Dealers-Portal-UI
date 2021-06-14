import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ScheduleService} from "../services/schedule/schedule.service";
import {Schedule} from "../interfaces/Schedule";

@Injectable({
  providedIn: 'root'
})
export class ScheduleMockService extends ScheduleService {
  schedules: Array<Schedule> = [];
  currentId: number = 0;

  create(schedule: Schedule, dealerCode: number | null): Observable<Schedule> {
    if (schedule.id === undefined) {
      schedule.id = this.currentId++;
    }
    schedule.dealerCode = dealerCode
    this.schedules.push(schedule);
    return of(schedule);
  }

  delete(code: number): Observable<boolean> {
    let deleted: boolean = false;
    let idx: number = this.schedules.findIndex(x => x.id === code)
    if (idx > -1) {
      this.schedules.splice(idx, 1)
      deleted = true
    }
    return of(deleted);
  }

  find(): Observable<Schedule[]> {
    return of(this.schedules);
  }

  findOne(code: number): Observable<Schedule> {
    let schedule: Schedule = <Schedule>this.schedules.find(x => x.id === code)
    return of(schedule);
  }

  update(schedule: Schedule): Observable<Schedule> {
    let idx: number = this.schedules.findIndex(x => x.id === schedule.id)
    if (idx > -1) {
      this.schedules[idx] = schedule
    }
    return of(schedule);
  }

}
