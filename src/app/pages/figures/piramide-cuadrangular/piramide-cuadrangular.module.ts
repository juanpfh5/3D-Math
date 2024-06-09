import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiramideCuadrangularPageRoutingModule } from './piramide-cuadrangular-routing.module';

import { PiramideCuadrangularPage } from './piramide-cuadrangular.page';

import { SharedModule } from 'src/app/pages/figures/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiramideCuadrangularPageRoutingModule,
    SharedModule
  ],
  declarations: [PiramideCuadrangularPage]
})
export class PiramideCuadrangularPageModule {}
