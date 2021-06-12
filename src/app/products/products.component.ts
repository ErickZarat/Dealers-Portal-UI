import { Component, OnInit } from '@angular/core';
import {ComponentPageTitleService} from "../page-title/page-title.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public _componentPageTitle: ComponentPageTitleService) {
    _componentPageTitle.title = "Products";
  }

  ngOnInit(): void {
  }

}
