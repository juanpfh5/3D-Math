import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { ExampleComponent } from 'src/app/components/example/example.component';

@NgModule({
    declarations: [ExampleComponent],
    imports: [
        CommonModule,
        IonicModule // Asegúrate de importar IonicModule aquí
    ],
    exports: [ExampleComponent]
})
export class SharedModule {}