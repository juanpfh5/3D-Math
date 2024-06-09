import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { FigureComponent } from '../../../components/figure/figure.component';

@NgModule({
    declarations: [FigureComponent],
    imports: [
        CommonModule,
        IonicModule // Asegúrate de importar IonicModule aquí
    ],
    exports: [FigureComponent]
})
export class SharedModule {}