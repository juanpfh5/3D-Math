import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrismaHexagonalPage } from './prisma-hexagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PrismaHexagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrismaHexagonalPageRoutingModule {}
