import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsferaPage } from './esfera.page';

const routes: Routes = [
  {
    path: '',
    component: EsferaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsferaPageRoutingModule {}
