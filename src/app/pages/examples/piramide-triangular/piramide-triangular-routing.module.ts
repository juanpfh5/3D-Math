import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiramideTriangularPage } from './piramide-triangular.page';

const routes: Routes = [
  {
    path: '',
    component: PiramideTriangularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiramideTriangularPageRoutingModule {}
