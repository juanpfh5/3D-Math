import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrismaTriangularPage } from './prisma-triangular.page';

describe('PrismaTriangularPage', () => {
  let component: PrismaTriangularPage;
  let fixture: ComponentFixture<PrismaTriangularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismaTriangularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
