import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrismaCuadrangularPage } from './prisma-cuadrangular.page';

describe('PrismaCuadrangularPage', () => {
  let component: PrismaCuadrangularPage;
  let fixture: ComponentFixture<PrismaCuadrangularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismaCuadrangularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
