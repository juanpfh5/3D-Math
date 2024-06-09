import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiramideOctagonalPageRoutingModule } from './piramide-octagonal-routing.module';

import { PiramideOctagonalPage } from './piramide-octagonal.page';

import { SharedModule } from 'src/app/pages/exercises/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiramideOctagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PiramideOctagonalPage]
})
export class PiramideOctagonalPageModule {}
