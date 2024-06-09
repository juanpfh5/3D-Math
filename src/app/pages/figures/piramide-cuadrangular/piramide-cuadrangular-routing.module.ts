import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiramideCuadrangularPage } from './piramide-cuadrangular.page';

const routes: Routes = [
  {
    path: '',
    component: PiramideCuadrangularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiramideCuadrangularPageRoutingModule {}
