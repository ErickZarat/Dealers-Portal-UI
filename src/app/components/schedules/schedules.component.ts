import {Component, OnInit, ViewChild} from '@angular/core';
import {ComponentPageTitleService} from "../../core/services/page-title/page-title.service";
import {MatDrawer} from "@angular/material/sidenav";
import {Schedule} from "../../core/interfaces/Schedule";
import {ScheduleService} from "../../core/services/schedule/schedule.service";


@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit{

  @ViewChild('formDrawer') formDrawer: MatDrawer | undefined;
  public schedules: Schedule[]

  constructor(public _componentPageTitle: ComponentPageTitleService, public scheduleService: ScheduleService) {
    _componentPageTitle.title = "Schedules";
    this.schedules = []
  }

  openDrawer() {
    if (this.formDrawer !== undefined) this.formDrawer.open();
  }

  closeDrawer() {
    if (this.formDrawer !== undefined) this.formDrawer.close();
  }

  refreshSchedules(){
    this.scheduleService.find().subscribe(schedules => {
      this.schedules = schedules;
    });
  }

  ngOnInit(): void {
    this.refreshSchedules()
  }

  // @ts-ignore
  onActivate(componentReference) {
    if (componentReference.hasOwnProperty("refreshHook"))
      componentReference.refreshHook.subscribe((refresh: Boolean) => {
        if (refresh){
          this.refreshSchedules()
          this.closeDrawer()
        }
      })
  }
}
