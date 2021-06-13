import { Component, OnInit } from '@angular/core';
import {ComponentPageTitleService} from "../page-title/page-title.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public _componentPageTitle: ComponentPageTitleService) {
    _componentPageTitle.title = "Users";
  }

  ngOnInit(): void {
  }

}
