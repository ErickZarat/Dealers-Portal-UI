import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../../core/interfaces/User";
import { ActivatedRoute } from '@angular/router';
import {Observable, of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Dealer} from "../../../core/interfaces/Dealer";
import {DealerService} from "../../../core/services/dealer/dealer.service";
import {UserService} from "../../../core/services/user/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = {name: "", email: "", phone: ""}
  isNewUser: Boolean = false
  @Output() refreshHook: EventEmitter<any> = new EventEmitter();

  public formControl = new FormControl();
  autoFilter: Observable<Dealer[]> = of([]);
  items: Dealer[] = [];
  dealer: Dealer = {alertEmail: "", name: "", notificationEmail: ""}

  constructor(private route: ActivatedRoute, private _snackBar: MatSnackBar, public userService: UserService, public dealerService: DealerService) {
    this.reset()
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentUser(params['id'])
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
    this.user = {name: "", email: "", phone: ""}
    this.dealer = {alertEmail: "", name: "", notificationEmail: ""}
  }

  setCurrentUser (code: String) {
    this.reset()
    if (code === "new") {
      this.isNewUser = true;
    } else {
      this.userService.findOne(Number(code)).subscribe(user => {
        this.user = user;
      })
    }
  }

  onSubmit() {
    let action: Observable<User> = of()
    if (this.isNewUser) {
      if (this.dealer.id)
        action = this.userService.create(this.user, this.dealer.id)
    } else {
      action = this.userService.update(this.user)
    }

    if(action)
      action.subscribe(user => {
        let message = user ? "Saved successful" : "Error saving user"
        this._snackBar.open(message);
        this.refreshHook.emit(true);
        this.reset()
      })
  }

  onScheduleSelected(item: Dealer) {
    this.dealer = item;
  }
}
