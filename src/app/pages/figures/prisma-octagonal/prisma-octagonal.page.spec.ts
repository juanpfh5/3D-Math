import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrismaOctagonalPage } from './prisma-octagonal.page';

describe('PrismaOctagonalPage', () => {
  let component: PrismaOctagonalPage;
  let fixture: ComponentFixture<PrismaOctagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismaOctagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
