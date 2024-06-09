import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrismaEneagonalPage } from './prisma-eneagonal.page';

describe('PrismaEneagonalPage', () => {
  let component: PrismaEneagonalPage;
  let fixture: ComponentFixture<PrismaEneagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismaEneagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
