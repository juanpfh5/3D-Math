import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuboPageRoutingModule } from './cubo-routing.module';

import { CuboPage } from './cubo.page';

import { SharedModule } from 'src/app/pages/figures/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuboPageRoutingModule,
    SharedModule
  ],
  declarations: [CuboPage]
})
export class CuboPageModule {}
