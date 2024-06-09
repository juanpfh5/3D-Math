import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrismaCuadrangularPageRoutingModule } from './prisma-cuadrangular-routing.module';

import { PrismaCuadrangularPage } from './prisma-cuadrangular.page';

import { SharedModule } from 'src/app/pages/figures/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrismaCuadrangularPageRoutingModule,
    SharedModule
  ],
  declarations: [PrismaCuadrangularPage]
})
export class PrismaCuadrangularPageModule {}
