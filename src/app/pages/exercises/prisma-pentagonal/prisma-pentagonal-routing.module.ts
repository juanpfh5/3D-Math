import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrismaPentagonalPage } from './prisma-pentagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PrismaPentagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrismaPentagonalPageRoutingModule {}
