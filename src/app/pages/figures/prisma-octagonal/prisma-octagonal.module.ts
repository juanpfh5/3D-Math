import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrismaOctagonalPageRoutingModule } from './prisma-octagonal-routing.module';

import { PrismaOctagonalPage } from './prisma-octagonal.page';

import { SharedModule } from 'src/app/pages/figures/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrismaOctagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PrismaOctagonalPage]
})
export class PrismaOctagonalPageModule {}
