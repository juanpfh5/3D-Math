import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiramideOctagonalPage } from './piramide-octagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PiramideOctagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiramideOctagonalPageRoutingModule {}
