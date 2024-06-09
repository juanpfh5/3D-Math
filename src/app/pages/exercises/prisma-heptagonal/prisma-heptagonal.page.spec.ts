import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrismaHeptagonalPage } from './prisma-heptagonal.page';

describe('PrismaHeptagonalPage', () => {
  let component: PrismaHeptagonalPage;
  let fixture: ComponentFixture<PrismaHeptagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismaHeptagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
