import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrismaEneagonalPageRoutingModule } from './prisma-eneagonal-routing.module';

import { PrismaEneagonalPage } from './prisma-eneagonal.page';

import { SharedModule } from 'src/app/pages/exercises/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrismaEneagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PrismaEneagonalPage]
})
export class PrismaEneagonalPageModule {}
