import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverContentComponent } from './popover-content.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})

export class ExerciseComponent  implements OnInit {
  respuestaUsuario1: string = '';
  respuestaUsuario2: string = '';
  respuestaUsuario3: string = '';
  respuestaUsuario4: string = '';

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  @Input() pregunta1: string = '';
  @Input() pregunta2: string = '';
  @Input() pregunta3: string = '';
  @Input() pregunta4: string = '';
  @Input() respuesta1: string = '';
  @Input() respuesta2: string = '';
  @Input() respuesta3: string = '';
  @Input() respuesta4: string = '';
  @Input() ruta1: string = '';
  @Input() ruta2: string = '';
  @Input() ruta3: string = '';
  @Input() ruta4: string = '';

  async presentPopover(ev: Event) {
    const resultados: string[] = [];

    if (this.respuestaUsuario1 == this.respuesta1) { resultados.push('Ejercicio 1: Correcto'); } 
    else { resultados.push('Ejercicio 1: Incorrecto'); }
    if (this.respuestaUsuario2 == this.respuesta2) { resultados.push('Ejercicio 2: Correcto'); } 
    else { resultados.push('Ejercicio 2: Incorrecto'); }
    if (this.respuestaUsuario3 == this.respuesta3) { resultados.push('Ejercicio 3: Correcto'); } 
    else { resultados.push('Ejercicio 3: Incorrecto'); }
    if (this.respuestaUsuario4 == this.respuesta4) { resultados.push('Ejercicio 4: Correcto'); } 
    else { resultados.push('Ejercicio 4: Incorrecto'); }

    const popover = await this.popoverController.create({
      component: PopoverContentComponent,
      componentProps: {
        resultados: resultados
      },
      cssClass: 'custom-popover',
      backdropDismiss: true
    });
    await popover.present();
  }
}
