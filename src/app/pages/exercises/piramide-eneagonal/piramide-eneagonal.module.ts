import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiramideEneagonalPageRoutingModule } from './piramide-eneagonal-routing.module';

import { PiramideEneagonalPage } from './piramide-eneagonal.page';

import { SharedModule } from 'src/app/pages/exercises/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiramideEneagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PiramideEneagonalPage]
})
export class PiramideEneagonalPageModule {}
