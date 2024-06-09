import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrismaOctagonalPage } from './prisma-octagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PrismaOctagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrismaOctagonalPageRoutingModule {}
