import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ScheduleService} from "../../../core/services/schedule/schedule.service";
import {Schedule} from "../../../core/interfaces/Schedule";

@Component({
  selector: 'app-delete-schedule',
  templateUrl: './delete-schedule.component.html',
  styleUrls: ['./delete-schedule.component.css']
})
export class DeleteScheduleComponent implements OnInit {

  @Output() refreshHook: EventEmitter<any> = new EventEmitter();
  schedule: Schedule = {initialHour: "", endHour: ""}

  constructor(private route: ActivatedRoute, public scheduleService: ScheduleService, private _snackBar: MatSnackBar) { }

  setCurrentSchedule (code: String) {
    this.scheduleService.findOne(Number(code)).subscribe(schedule => {
      this.schedule = schedule;
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentSchedule(params['id'])
    });
  }

  onSubmit() {
    if (this.schedule.id)
      this.scheduleService.delete(this.schedule.id).subscribe(schedule => {
        let message = schedule ? "Deleted successful" : "Error deleting Schedule"
        this._snackBar.open(message);
        this.refreshHook.emit(true);
      })
  }
}
