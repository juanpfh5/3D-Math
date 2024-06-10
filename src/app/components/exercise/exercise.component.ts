import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverContentComponent } from './popover-content.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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

  sanitizedText1: SafeHtml = '';
  sanitizedText2: SafeHtml = '';
  sanitizedText3: SafeHtml = '';
  sanitizedText4: SafeHtml = '';

  constructor(private popoverController: PopoverController, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sanitizedText1 = this.sanitizer.bypassSecurityTrustHtml(this.pregunta1);
    this.sanitizedText2 = this.sanitizer.bypassSecurityTrustHtml(this.pregunta2);
    this.sanitizedText3 = this.sanitizer.bypassSecurityTrustHtml(this.pregunta3);
    this.sanitizedText4 = this.sanitizer.bypassSecurityTrustHtml(this.pregunta4);
  }

  @Input() tipo: string = ''; // 'prisma' o 'piramide'
  
  getCardBackground() {
    if (this.tipo === 'prisma') {
      // return '#C04275';
      return '#F3E8CC';
    } else if (this.tipo === 'piramide') {
      // return '#1F5E45';
      return '#FCE3CD';
    } else {
      return '#F9F1ED'; // Valor por defecto o para otros tipos
    }
  }

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
