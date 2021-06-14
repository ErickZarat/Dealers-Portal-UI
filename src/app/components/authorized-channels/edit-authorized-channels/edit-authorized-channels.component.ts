import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthorizedChannel} from "../../../core/interfaces/AuthorizedChannel";
import { ActivatedRoute } from '@angular/router';
import {Observable, of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {AuthorizedChannelService} from "../../../core/services/authorized-channel/authorized-channel.service";
import {Dealer} from "../../../core/interfaces/Dealer";
import {DealerService} from "../../../core/services/dealer/dealer.service";

@Component({
  selector: 'app-add-authorized-channel',
  templateUrl: './edit-authorized-channels.component.html',
  styleUrls: ['./edit-authorized-channels.component.css']
})
export class EditAuthorizedChannelComponent implements OnInit {

  authorizedChannel: AuthorizedChannel = {name: ""}
  isNewAuthorizedChannel: Boolean = false
  @Output() refreshHook: EventEmitter<any> = new EventEmitter();

  public formControl = new FormControl();
  autoFilter: Observable<Dealer[]> = of([]);
  items: Dealer[] = [];
  dealer: Dealer = {alertEmail: "", name: "", notificationEmail: ""}

  constructor(private route: ActivatedRoute, private _snackBar: MatSnackBar, public authorizedChannelService: AuthorizedChannelService, public dealerService: DealerService) {
    this.reset()
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentAuthorizedChannel(params['code'])
    });

    this.dealerService.find().subscribe( dealers => this.items = dealers )

    this.autoFilter = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.mat_filter(value))
    );
  }

  private mat_filter(value: string): Dealer[] {
    return this.items.filter(option => option.name.includes(value));
  }

  reset () {
    this.authorizedChannel = {name: ""}
    this.dealer = {alertEmail: "", name: "", notificationEmail: ""}
  }

  setCurrentAuthorizedChannel (code: String) {
    this.reset()
    if (code === "new") {
      this.isNewAuthorizedChannel = true;
    } else {
      this.authorizedChannelService.findOne(Number(code)).subscribe(authorizedChannel => {
        this.authorizedChannel = authorizedChannel;
      })
    }
  }

  onSubmit() {
    let action: Observable<AuthorizedChannel> = of()
    if (this.isNewAuthorizedChannel) {
      if (this.dealer.code)
        action = this.authorizedChannelService.create(this.authorizedChannel, this.dealer.code)
    } else {
      action = this.authorizedChannelService.update(this.authorizedChannel)
    }

    if(action)
      action.subscribe(authorizedChannel => {
        let message = authorizedChannel ? "Saved successful" : "Error saving authorizedChannel"
        this._snackBar.open(message);
        this.refreshHook.emit(true);
        this.reset()
      })
  }

  onScheduleSelected(item: Dealer) {
    this.dealer = item;
  }
}
