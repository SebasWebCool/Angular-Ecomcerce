import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsingleComponent } from './productsingle.component';

describe('ProductsingleComponent', () => {
  let component: ProductsingleComponent;
  let fixture: ComponentFixture<ProductsingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsingleComponent]
    });
    fixture = TestBed.createComponent(ProductsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
