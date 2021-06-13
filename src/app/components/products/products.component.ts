import { Component, OnInit } from '@angular/core';
import {ComponentPageTitleService} from "../../core/services/page-title.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(public _componentPageTitle: ComponentPageTitleService) {
    _componentPageTitle.title = "Products";
  }

}
