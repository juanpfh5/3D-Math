import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrismaHeptagonalPageRoutingModule } from './prisma-heptagonal-routing.module';

import { PrismaHeptagonalPage } from './prisma-heptagonal.page';

import { SharedModule } from '../shared/shared.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrismaHeptagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PrismaHeptagonalPage]
})
export class PrismaHeptagonalPageModule {}
