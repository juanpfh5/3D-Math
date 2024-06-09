import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiramideTriangularPageRoutingModule } from './piramide-triangular-routing.module';

import { PiramideTriangularPage } from './piramide-triangular.page';

import { SharedModule } from '../shared/shared.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiramideTriangularPageRoutingModule,
    SharedModule
  ],
  declarations: [PiramideTriangularPage]
})
export class PiramideTriangularPageModule {}
