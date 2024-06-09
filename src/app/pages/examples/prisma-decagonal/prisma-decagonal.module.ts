import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrismaDecagonalPageRoutingModule } from './prisma-decagonal-routing.module';

import { PrismaDecagonalPage } from './prisma-decagonal.page';

import { SharedModule } from '../shared/shared.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrismaDecagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PrismaDecagonalPage]
})
export class PrismaDecagonalPageModule {}
