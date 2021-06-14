import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Dealer} from "../../../core/interfaces/Dealer";
import {Schedule} from "../../../core/interfaces/Schedule";
import { ActivatedRoute } from '@angular/router';
import {DealerService} from "../../../core/services/dealer/dealer.service";
import {Observable, of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {ScheduleService} from "../../../core/services/schedule/schedule.service";

@Component({
  selector: 'app-add-dealer',
  templateUrl: './edit-dealer.component.html',
  styleUrls: ['./edit-dealer.component.css']
})
export class EditDealerComponent implements OnInit {

  dealer: Dealer = {alertEmail: "", name: "", notificationEmail: "", schedule: {initialHour: "", endHour:""}}
  schedule: Schedule = {initialHour: "", endHour:""}
  isNewDealer: Boolean = false
  @Output() refreshHook: EventEmitter<any> = new EventEmitter();

  public formControl = new FormControl();
  autoFilter: Observable<Schedule[]> = of([]);
  items: Schedule[] = [];

  constructor(private route: ActivatedRoute, private _snackBar: MatSnackBar, public dealerService: DealerService, public scheduleService: ScheduleService ) {
    this.reset()
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentDealer(params['code'])
    });

    this.scheduleService.find().subscribe(schedules => this.items = schedules)

    this.autoFilter = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.mat_filter(value))
    );
  }

  private mat_filter(value: string): Schedule[] {
    return this.items.filter(option => `${option.initialHour} - ${option.endHour}`.includes(value));
  }

  reset () {
    this.dealer = {alertEmail: "", name: "", notificationEmail: "", schedule: {initialHour: "", endHour:""}}
    this.schedule = {initialHour: "", endHour:""}
  }

  setCurrentDealer (code: String) {
    this.reset()
    if (code === "new") {
      this.isNewDealer = true;
    } else {
      this.dealerService.findOne(Number(code)).subscribe(dealer => {
        this.dealer = dealer;
        if (dealer.schedule)
          this.schedule = dealer.schedule;
      })
    }
  }

  onSubmit() {
    let action: Observable<Dealer>
    this.dealer.schedule = this.schedule
    if (this.isNewDealer) {
      action = this.dealerService.create(this.dealer)
    } else {
      action = this.dealerService.update(this.dealer)
    }

    action.subscribe(dealer => {
      let message = dealer ? "Saved successful" : "Error saving dealer"
      this._snackBar.open(message);
      this.refreshHook.emit(true);
    })
  }

  onScheduleSelected(item: Schedule) {
    this.schedule = item;
  }
}
