import { Component, OnInit } from '@angular/core';
import {ComponentPageTitleService} from "../page-title/page-title.service";

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  constructor(public _componentPageTitle: ComponentPageTitleService) {
    _componentPageTitle.title = "Schedules";
  }

  ngOnInit(): void {
  }

}
