import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrismaDecagonalPage } from './prisma-decagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PrismaDecagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrismaDecagonalPageRoutingModule {}
