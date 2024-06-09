import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrismaHexagonalPageRoutingModule } from './prisma-hexagonal-routing.module';

import { PrismaHexagonalPage } from './prisma-hexagonal.page';

import { SharedModule } from 'src/app/pages/figures/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrismaHexagonalPageRoutingModule,
    SharedModule
  ],
  declarations: [PrismaHexagonalPage]
})
export class PrismaHexagonalPageModule {}
