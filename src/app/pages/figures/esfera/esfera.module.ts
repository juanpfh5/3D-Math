import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsferaPageRoutingModule } from './esfera-routing.module';

import { EsferaPage } from './esfera.page';

// import { FigureComponent } from '../../../components/figure/figure.component';
import { SharedModule } from 'src/app/pages/figures/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsferaPageRoutingModule,
    SharedModule 
  ],
  declarations: [EsferaPage]
})
export class EsferaPageModule {}
