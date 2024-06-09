import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrismaPentagonalPage } from './prisma-pentagonal.page';

describe('PrismaPentagonalPage', () => {
  let component: PrismaPentagonalPage;
  let fixture: ComponentFixture<PrismaPentagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismaPentagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
