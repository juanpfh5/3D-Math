import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiramideHexagonalPage } from './piramide-hexagonal.page';

const routes: Routes = [
  {
    path: '',
    component: PiramideHexagonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiramideHexagonalPageRoutingModule {}
