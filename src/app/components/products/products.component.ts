import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {ComponentPageTitleService} from "../../core/services/page-title/page-title.service";
import {Product} from "../../core/interfaces/Product";
import {ProductService} from "../../core/services/product/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  @ViewChild('formDrawer') formDrawer: MatDrawer | undefined;
  public products: Product[]

  constructor(public _componentPageTitle: ComponentPageTitleService, public productService: ProductService) {
    _componentPageTitle.title = "Products";
    this.products = []
  }

  openDrawer() {
    if (this.formDrawer !== undefined) this.formDrawer.open();
  }

  closeDrawer() {
    if (this.formDrawer !== undefined) this.formDrawer.close();
  }

  refreshProducts(){
    this.productService.find().subscribe(products => {
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.refreshProducts()
  }

  // @ts-ignore
  onActivate(componentReference) {
    if (componentReference.hasOwnProperty("refreshHook"))
      componentReference.refreshHook.subscribe((refresh: Boolean) => {
        if (refresh){
          this.refreshProducts()
          this.closeDrawer()
        }
      })
  }
}
