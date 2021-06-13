import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {ComponentPageTitleService} from "../../core/services/page-title.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(public _componentPageTitle: ComponentPageTitleService, public userService: UserService) {
    _componentPageTitle.title = "Users";
  }

  ngOnInit(): void {
    this.userService.showSource();
  }

}
