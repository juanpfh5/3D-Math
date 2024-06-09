import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiramideEneagonalPage } from './piramide-eneagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PiramideEneagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiramideEneagonalPageRoutingModule {}
