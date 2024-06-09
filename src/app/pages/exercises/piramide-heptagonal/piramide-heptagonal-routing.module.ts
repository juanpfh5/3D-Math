import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiramideHeptagonalPage } from './piramide-heptagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PiramideHeptagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiramideHeptagonalPageRoutingModule {}
