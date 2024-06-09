import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuboPage } from './cubo.page';

describe('CuboPage', () => {
  let component: CuboPage;
  let fixture: ComponentFixture<CuboPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
