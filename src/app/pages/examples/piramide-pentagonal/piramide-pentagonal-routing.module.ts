import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiramidePentagonalPage } from './piramide-pentagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PiramidePentagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiramidePentagonalPageRoutingModule {}
