import { Component } from '@angular/core';

@Component({
  selector: 'app-product-choice',
  templateUrl: './product-choice.component.html',
  styleUrls: ['./product-choice.component.scss']
})
export class ProductChoiceComponent   {

  showedContent = false;

  constructor() { }

  changeContentView(){
    this.showedContent = !this.showedContent
  }
}
