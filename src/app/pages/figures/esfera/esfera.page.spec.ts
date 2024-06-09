import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsferaPage } from './esfera.page';

describe('EsferaPage', () => {
  let component: EsferaPage;
  let fixture: ComponentFixture<EsferaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EsferaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
