import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductChoiceComponent } from './components/product-choice/product-choice.component';
import { ProductComponent } from './components/product/product.component';
import { TooltipComponent } from './components/product/tooltip/tooltip.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,ProductChoiceComponent,
    ProductsListComponent,
    ProductComponent,
    TooltipComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
