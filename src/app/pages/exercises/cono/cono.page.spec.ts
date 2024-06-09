import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConoPage } from './cono.page';

describe('ConoPage', () => {
  let component: ConoPage;
  let fixture: ComponentFixture<ConoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
