import {Component, OnInit, ViewChild} from '@angular/core';
import {ComponentPageTitleService} from "../page-title/page-title.service";
import {MatDrawer, MatSidenav} from "@angular/material/sidenav";

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
