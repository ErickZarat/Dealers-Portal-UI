import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../../core/interfaces/Product";
import { ActivatedRoute } from '@angular/router';
import {Observable, of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Dealer} from "../../../core/interfaces/Dealer";
import {DealerService} from "../../../core/services/dealer/dealer.service";
import {ProductService} from "../../../core/services/product/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product = {name: "", amount: 0, description: ""}
  isNewProduct: Boolean = false
  @Output() refreshHook: EventEmitter<any> = new EventEmitter();

  public formControl = new FormControl();
  autoFilter: Observable<Dealer[]> = of([]);
  items: Dealer[] = [];
  dealer: Dealer = {alertEmail: "", name: "", notificationEmail: ""}

  constructor(private route: ActivatedRoute, private _snackBar: MatSnackBar, public productService: ProductService, public dealerService: DealerService) {
    this.reset()
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentProduct(params['code'])
    });

    this.dealerService.find().subscribe( dealers => this.items = dealers )

    this.autoFilter = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.mat_filter(value))
    );
  }

  private mat_filter(value: string): Dealer[] {
    return this.items.filter(option => option.name.includes(value));
  }

  reset () {
    this.product = {name: "", amount: 0, description: ""}
    this.dealer = {alertEmail: "", name: "", notificationEmail: ""}
  }

  setCurrentProduct (code: String) {
    this.reset()
    if (code === "new") {
      this.isNewProduct = true;
    } else {
      this.productService.findOne(Number(code)).subscribe(product => {
        this.product = product;
      })
    }
  }

  onSubmit() {
    let action: Observable<Product> = of()
    if (this.isNewProduct) {
      if (this.dealer.code)
        action = this.productService.create(this.product, this.dealer.code)
    } else {
      action = this.productService.update(this.product)
    }

    if(action)
      action.subscribe(product => {
        let message = product ? "Saved successful" : "Error saving product"
        this._snackBar.open(message);
        this.refreshHook.emit(true);
        this.reset()
      })
  }

  onScheduleSelected(item: Dealer) {
    this.dealer = item;
  }
}
