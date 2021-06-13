import { Component, OnInit } from '@angular/core';
import {ComponentPageTitleService} from "../page-title/page-title.service";
import {UserService} from "../../core/services/user.service";


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
