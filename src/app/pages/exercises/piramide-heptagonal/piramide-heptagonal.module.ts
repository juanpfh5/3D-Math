import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiramideHeptagonalPageRoutingModule } from './piramide-heptagonal-routing.module';

import { PiramideHeptagonalPage } from './piramide-heptagonal.page';

import { SharedModule } from 'src/app/pages/exercises/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiramideHeptagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PiramideHeptagonalPage]
})
export class PiramideHeptagonalPageModule {}
