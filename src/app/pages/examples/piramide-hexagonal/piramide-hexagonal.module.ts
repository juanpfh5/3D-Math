import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiramideHexagonalPageRoutingModule } from './piramide-hexagonal-routing.module';

import { PiramideHexagonalPage } from './piramide-hexagonal.page';

import { SharedModule } from '../shared/shared.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiramideHexagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PiramideHexagonalPage]
})
export class PiramideHexagonalPageModule {}
