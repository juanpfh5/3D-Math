import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrismaTriangularPage } from './prisma-triangular.page';

const routes: Routes = [
  {
    path: '',
    component: PrismaTriangularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrismaTriangularPageRoutingModule {}
