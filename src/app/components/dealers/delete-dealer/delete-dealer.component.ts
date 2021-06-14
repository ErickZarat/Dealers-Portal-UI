import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Dealer} from "../../../core/interfaces/Dealer";
import { ActivatedRoute } from '@angular/router';
import {DealerService} from "../../../core/services/dealer/dealer.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete-dealer',
  templateUrl: './delete-dealer.component.html',
  styleUrls: ['./delete-dealer.component.css']
})
export class DeleteDealerComponent implements OnInit {

  dealer: Dealer = {alertEmail: "", name: "", notificationEmail: ""}
  @Output() refreshHook: EventEmitter<any> = new EventEmitter();

  constructor(private route: ActivatedRoute, public dealerService: DealerService, private _snackBar: MatSnackBar) { }

  setCurrentDealer (code: String) {
    this.dealerService.findOne(Number(code)).subscribe(dealer => {
      this.dealer = dealer;
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentDealer(params['code'])
    });
  }

  onSubmit() {
    if (this.dealer.code)
      this.dealerService.delete(this.dealer.code).subscribe(dealer => {
        let message = dealer ? "Deleted successful" : "Error deleting dealer"
        this._snackBar.open(message);
        this.refreshHook.emit(true);
      })
  }
}
