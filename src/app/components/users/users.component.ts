import { Component, OnInit } from '@angular/core';

import {ComponentPageTitleService} from "../../core/services/page-title/page-title.service";
import {User} from "../../core/interfaces/User";
import {UserService} from "../../core/services/user/user.service";


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
    this.userService.findOne(1)
      .subscribe(user => {
        console.log(user)
      });

    let user: User = {
      name: 'Jose1',
      phone: '12345678',
      email: 'jose@gmail.com',
    }

    this.userService.create(user, 1).subscribe(user => {
      console.log("created users")
      console.log(user)
    })


    this.userService.find(1)
      .subscribe(users => {
        console.log(users)
      });

  }

}
