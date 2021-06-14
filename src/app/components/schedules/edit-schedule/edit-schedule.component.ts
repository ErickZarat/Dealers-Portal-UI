import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Schedule} from "../../../core/interfaces/Schedule";
import { ActivatedRoute } from '@angular/router';
import {Observable, of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ScheduleService} from "../../../core/services/schedule/schedule.service";

@Component({
  selector: 'app-add-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  schedule: Schedule = {initialHour: "", endHour:""}
  isNew: Boolean = false
  @Output() refreshHook: EventEmitter<any> = new EventEmitter();


  constructor(private route: ActivatedRoute, private _snackBar: MatSnackBar, public scheduleService: ScheduleService ) {
    this.reset()
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentSchedule(params['id'])
    });
  }

  reset () {
    this.schedule = {initialHour: "", endHour:""}
  }

  setCurrentSchedule (code: String) {
    this.reset()
    if (code === "new") {
      this.isNew = true;
    } else {
      this.scheduleService.findOne(Number(code)).subscribe(Schedule => {
        this.schedule = Schedule;
      })
    }
  }

  onSubmit() {
    let action: Observable<Schedule>

    if (this.isNew) {
      action = this.scheduleService.create(this.schedule)
    } else {
      action = this.scheduleService.update(this.schedule)
    }

    action.subscribe(schedule => {
      let message = schedule ? "Saved successful" : "Error saving schedule"
      this._snackBar.open(message);
      this.refreshHook.emit(true);
    })
  }

}
