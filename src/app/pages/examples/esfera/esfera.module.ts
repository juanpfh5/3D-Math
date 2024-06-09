import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsferaPageRoutingModule } from './esfera-routing.module';

import { EsferaPage } from './esfera.page';

// import { ExampleComponent } from '../../../components/example/example.component'; // Importa tu componente
import { SharedModule } from '../shared/shared.module'; 

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
