import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrismaEneagonalPage } from './prisma-eneagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PrismaEneagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrismaEneagonalPageRoutingModule {}
