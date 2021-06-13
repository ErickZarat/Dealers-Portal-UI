import {Component, NgModule, OnInit} from '@angular/core';
import {ComponentPageTitleService} from "../page-title/page-title.service";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {

  constructor(public _componentPageTitle: ComponentPageTitleService) {}

  getTitle() {
    return this._componentPageTitle.title;
  }

}

@NgModule({
  imports: [],
  exports: [PageHeaderComponent],
  declarations: [PageHeaderComponent],
})
export class ComponentHeaderModule { }
