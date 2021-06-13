import { Component, OnInit } from '@angular/core';
import {ComponentPageTitleService} from "../../core/services/page-title.service";

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent {

  constructor(public _componentPageTitle: ComponentPageTitleService) {
    _componentPageTitle.title = "Schedules";
  }

}
