import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {ComponentPageTitleService} from "../../core/services/page-title/page-title.service";

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent {

  @ViewChild('formDrawer') formDrawer: MatDrawer | undefined;

  constructor(public _componentPageTitle: ComponentPageTitleService) {
    _componentPageTitle.title = "Dealers";
  }

  openDrawer() {
    if (this.formDrawer !== undefined) this.formDrawer.open();
  }
}
