import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiramideDecagonalPageRoutingModule } from './piramide-decagonal-routing.module';

import { PiramideDecagonalPage } from './piramide-decagonal.page';

import { SharedModule } from 'src/app/pages/figures/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiramideDecagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PiramideDecagonalPage]
})
export class PiramideDecagonalPageModule {}
