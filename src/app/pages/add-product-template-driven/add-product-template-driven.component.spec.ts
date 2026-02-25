import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductTemplateDrivenComponent } from './add-product-template-driven.component';

describe('AddProductTemplateDrivenComponent', () => {
  let component: AddProductTemplateDrivenComponent;
  let fixture: ComponentFixture<AddProductTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductTemplateDrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
