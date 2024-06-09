import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuboPage } from './cubo.page';

const routes: Routes = [
  {
    path: '',
    component: CuboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuboPageRoutingModule {}
