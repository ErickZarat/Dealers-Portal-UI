import { Component, OnInit } from '@angular/core';
import {ComponentPageTitleService} from "../../core/services/page-title/page-title.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public _componentPageTitle: ComponentPageTitleService) {
    _componentPageTitle.title = "Dashboard";
  }

}
