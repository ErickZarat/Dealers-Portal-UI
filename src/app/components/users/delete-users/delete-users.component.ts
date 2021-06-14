import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../../core/interfaces/User";
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../../core/services/user/user.service";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUserComponent implements OnInit {

  user: User = {name: "", email: "", phone: ""}
  @Output() refreshHook: EventEmitter<any> = new EventEmitter();

  constructor(private route: ActivatedRoute, public userService: UserService, private _snackBar: MatSnackBar) { }

  setCurrentUser (code: String) {
    this.userService.findOne(Number(code)).subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentUser(params['id'])
    });
  }

  onSubmit() {
    if (this.user.id)
      this.userService.delete(this.user.id).subscribe(user => {
        let message = user ? "Deleted successful" : "Error deleting user"
        this._snackBar.open(message);
        this.refreshHook.emit(true);
      })
  }
}
