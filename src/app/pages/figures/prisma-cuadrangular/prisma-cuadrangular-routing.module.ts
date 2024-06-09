import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrismaCuadrangularPage } from './prisma-cuadrangular.page';

const routes: Routes = [
  {
    path: '',
    component: PrismaCuadrangularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrismaCuadrangularPageRoutingModule {}
