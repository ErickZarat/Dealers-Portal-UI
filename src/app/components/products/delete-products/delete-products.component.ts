import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../../core/interfaces/Product";
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProductService} from "../../../core/services/product/product.service";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductComponent implements OnInit {

  product: Product = {name: "", amount: 0, description: ""}
  @Output() refreshHook: EventEmitter<any> = new EventEmitter();

  constructor(private route: ActivatedRoute, public productService: ProductService, private _snackBar: MatSnackBar) { }

  setCurrentProduct (code: String) {
    this.productService.findOne(Number(code)).subscribe(product => {
      this.product = product;
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentProduct(params['id'])
    });
  }

  onSubmit() {
    if (this.product.id)
      this.productService.delete(this.product.id).subscribe(product => {
        let message = product ? "Deleted successful" : "Error deleting product"
        this._snackBar.open(message);
        this.refreshHook.emit(true);
      })
  }
}
