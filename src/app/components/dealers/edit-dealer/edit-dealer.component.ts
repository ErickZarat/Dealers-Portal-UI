import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Dealer} from "../../../core/interfaces/Dealer";
import {Schedule} from "../../../core/interfaces/Schedule";
import { ActivatedRoute } from '@angular/router';
import {DealerService} from "../../../core/services/dealer/dealer.service";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(private route: ActivatedRoute, public dealerService: DealerService, private _snackBar: MatSnackBar) {
    this.reset()
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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentDealer(params['code'])
    });
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

}
