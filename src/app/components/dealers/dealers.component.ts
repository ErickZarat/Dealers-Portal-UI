import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {ComponentPageTitleService} from "../../core/services/page-title/page-title.service";
import {Dealer} from "../../core/interfaces/Dealer";
import {DealerService} from "../../core/services/dealer/dealer.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent implements OnInit{

  @ViewChild('formDrawer') formDrawer: MatDrawer | undefined;
  public dealers: Dealer[]

  constructor(public _componentPageTitle: ComponentPageTitleService, public dealerService: DealerService) {
    _componentPageTitle.title = "Dealers";
    this.dealers = []
  }

  openDrawer() {
    if (this.formDrawer !== undefined) this.formDrawer.open();
  }

  ngOnInit(): void {
    this.dealerService.find().subscribe(dealers => {
      this.dealers = dealers;
    });

  }
}
