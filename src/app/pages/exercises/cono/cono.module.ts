import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConoPageRoutingModule } from './cono-routing.module';

import { ConoPage } from './cono.page'; 

import { SharedModule } from 'src/app/pages/exercises/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConoPageRoutingModule,
    SharedModule
  ],
  declarations: [ConoPage]
})
export class ConoPageModule {}
