import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,

  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Product, productsList } from '../../shared/models/product';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductsListComponent),
      multi: true,
    },
  ],
})
export class ProductsListComponent implements ControlValueAccessor {

  productsList = productsList;
  selectedProduct?: Product| undefined;
  
  trackById = (id: number, item: Product) => item;

  constructor() {}

  onChange = (selectedProduct: Product) => {
    console.log(selectedProduct);
  };

  selectProduct(value: Product) {
    if (this.selectedProduct !== value) {
      this.selectedProduct = value;
      this.onChange(this.selectedProduct);
    }
  }

  writeValue(value: Product) {
    this.selectedProduct = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {}
}
