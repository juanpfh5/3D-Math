import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrismaHeptagonalPage } from './prisma-heptagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PrismaHeptagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrismaHeptagonalPageRoutingModule {}
