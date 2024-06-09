import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsferaPageRoutingModule } from './esfera-routing.module';

import { EsferaPage } from './esfera.page';

// import { ExerciseComponent } from '../../../components/exercise/exercise.component';  
import { SharedModule } from 'src/app/pages/exercises/shared/shared.module';

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
