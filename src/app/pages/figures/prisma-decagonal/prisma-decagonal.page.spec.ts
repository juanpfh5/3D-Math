import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrismaDecagonalPage } from './prisma-decagonal.page';

describe('PrismaDecagonalPage', () => {
  let component: PrismaDecagonalPage;
  let fixture: ComponentFixture<PrismaDecagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismaDecagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
