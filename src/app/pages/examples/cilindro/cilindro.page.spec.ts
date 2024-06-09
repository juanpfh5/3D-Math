import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CilindroPage } from './cilindro.page';

describe('CilindroPage', () => {
  let component: CilindroPage;
  let fixture: ComponentFixture<CilindroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CilindroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
