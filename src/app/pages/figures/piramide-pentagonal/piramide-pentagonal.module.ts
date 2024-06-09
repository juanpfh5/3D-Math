import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiramidePentagonalPageRoutingModule } from './piramide-pentagonal-routing.module';

import { PiramidePentagonalPage } from './piramide-pentagonal.page';

import { SharedModule } from 'src/app/pages/figures/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiramidePentagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PiramidePentagonalPage]
})
export class PiramidePentagonalPageModule {}
