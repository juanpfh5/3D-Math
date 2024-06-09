import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiramideDecagonalPage } from './piramide-decagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PiramideDecagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiramideDecagonalPageRoutingModule {}
