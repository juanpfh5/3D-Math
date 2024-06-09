import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrismaTriangularPageRoutingModule } from './prisma-triangular-routing.module';

import { PrismaTriangularPage } from './prisma-triangular.page';

import { SharedModule } from 'src/app/pages/exercises/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrismaTriangularPageRoutingModule,
    SharedModule
  ],
  declarations: [PrismaTriangularPage]
})
export class PrismaTriangularPageModule {}
