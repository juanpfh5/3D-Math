import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrismaHexagonalPage } from './prisma-hexagonal.page';

describe('PrismaHexagonalPage', () => {
  let component: PrismaHexagonalPage;
  let fixture: ComponentFixture<PrismaHexagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismaHexagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
