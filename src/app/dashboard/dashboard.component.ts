import { Component, OnInit } from '@angular/core';
import {ComponentPageTitleService} from "../page-title/page-title.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public _componentPageTitle: ComponentPageTitleService) {
    _componentPageTitle.title = "Dashboard";
  }

  ngOnInit(): void {
  }

}
