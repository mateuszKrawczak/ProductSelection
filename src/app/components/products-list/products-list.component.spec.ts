/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductsListComponent } from './products-list.component';


describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select product from ts', () => {
    component.selectProduct({id:1,name:"Produkt 1",description:"sd"});
    expect(component.selectedProduct.id).toBe(1)
  });

  it('should select product from html', () => {
    const product2 = fixture.debugElement.query(By.css('#product-2'));

    product2.triggerEventHandler('click',null)
    expect(component.selectedProduct.id).toBe(2)
  });
});
