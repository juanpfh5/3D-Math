import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConoPage } from './cono.page';

const routes: Routes = [
  {
    path: '',
    component: ConoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConoPageRoutingModule {}
