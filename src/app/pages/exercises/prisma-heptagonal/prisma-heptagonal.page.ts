import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HelpPopoverComponent } from '../../../components/exercise/help-popover.component';

@Component({
  selector: 'app-prisma-heptagonal',
  templateUrl: './prisma-heptagonal.page.html',
  styleUrls: ['./prisma-heptagonal.page.scss'],
})
export class PrismaHeptagonalPage implements OnInit {

  pregunta1: string = '';
  respuesta1: string = '';
  ruta1: string = '';
  pregunta2: string = '';
  respuesta2: string = '';
  ruta2: string = '';
  pregunta3: string = '';
  respuesta3: string = '';
  ruta3: string = '';
  pregunta4: string = '';
  respuesta4: string = '';
  ruta4: string = '';

  operations: string[] = ['el <strong>perímetro de la base</strong>', 'el <strong>área de la base</strong>', 'el <strong>área lateral</strong>', 'el <strong>área total</strong>', 'el <strong>volumen</strong>'];

  constructor(private popoverController: PopoverController) { }

  crearYMezclarVector(n: number): number[] {
    // Crear el arreglo de 1 a n
    const vector: number[] = Array.from({ length: n }, (_, i) => i);

      for (let i = vector.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vector[i], vector[j]] = [vector[j], vector[i]];
      }
      
      return vector;
  }

  ngOnInit() {
    
    let randomVector = this.crearYMezclarVector(this.operations.length);

    const operacion1 = this.generateRandomOperation(randomVector[0]);
    this.pregunta1 = operacion1.pregunta;
    this.respuesta1 = operacion1.respuesta;
    this.ruta1 = operacion1.ruta;

    const operacion2 = this.generateRandomOperation(randomVector[1]);
    this.pregunta2 = operacion2.pregunta;
    this.respuesta2 = operacion2.respuesta;
    this.ruta2 = operacion2.ruta;

    const operacion3 = this.generateRandomOperation(randomVector[2]);
    this.pregunta3 = operacion3.pregunta;
    this.respuesta3 = operacion3.respuesta;
    this.ruta3 = operacion3.ruta;

    const operacion4 = this.generateRandomOperation(randomVector[3]);
    this.pregunta4 = operacion4.pregunta;
    this.respuesta4 = operacion4.respuesta;
    this.ruta4 = operacion4.ruta;
  }

  // Función para generar una operación aleatoria y su resultado
  generateRandomOperation(option: number): { pregunta: string, respuesta: string, ruta: string } {
    const num1 = Math.floor(Math.random() * 50) + 1; // a
    const num2 = Math.floor(Math.random() * 50) + 1; // altura
    const num3 = 3.1416 // pi

    if (option === -1) {
      option = Math.floor(Math.random() * this.operations.length);
    }
    var operation = this.operations[option];

    let pregunta = `Calcular ${operation} de un prisma heptagonal cuya longitud de cada lado del heptágono es <strong> a = ${num1}</strong>, cuyo valor de la altura es igual a <strong>h = ${num2}</strong>. (Considera  que el valor de pi es igual a ${num3})`;
    let respuesta: number = 0;
    let ruta: string = '';

    switch (option) {
      case 0: // Perímetro de la base
        respuesta = 7 * num1;
        ruta = 'assets/images/prisma_heptagonal/fig_1.jpg';
        break;
      case 1: // Área de la base
        respuesta = (7/4) * Math.pow(num1, 2) * (1/Math.tan(num3/7));
        ruta = 'assets/images/prisma_heptagonal/figure_static.jpg';
        break;
      case 2: // Área lateral
        respuesta = 7 * num1 * num2;
        ruta = 'assets/images/prisma_heptagonal/fig_1.jpg';
        break;
      case 3: // Área total
        respuesta = 2 * ((7/4) * Math.pow(num1, 2) * (1/Math.tan(num3/7))) + (7 * num1 * num2);
        ruta = 'assets/images/prisma_heptagonal/figure_static.jpg';
        break;
      case 4: // Volumen
        respuesta = (7/4) * Math.pow(num1, 2) * (1/Math.tan(num3/7)) * num2;
        ruta = 'assets/images/prisma_heptagonal/fig_1.jpg';
        break;
      default:
        respuesta = 0;
        ruta = 'assets/images/prisma_heptagonal/figure.gif';
        break;
    }

    return {
      pregunta,
      respuesta: respuesta.toFixed(2).toString(),
      ruta
    };
  }

  async presentHelpPopover(ev: Event) {
    const formulas = `
      <p><strong>Perímetro de la base</strong>: <br> <span>$$P = 7 a$$</span></p>
      <p><strong>Área de la base</strong>: <br> <span>$$A_{base} = \\frac{7}{4} a^2 cot(\\frac{\\pi}{7})$$</span></p>
      <p><strong>Área lateral</strong>: <br> <span>$$A_{lateral} = P h$$</span></p>
      <p><strong>Área total</strong>: <br> <span>$$A_{total} = 2 A_{base} + A_{lateral}$$</span></p>
      <p><strong>Volumen</strong>: <br> <span>$$V = A_{base} h$$</span></p>
      Donde <strong>a</strong> es la longitud de un lado del heptágono y <strong>h</strong> es la altura del prisma.
    `;

    const popover = await this.popoverController.create({
      component: HelpPopoverComponent,
      componentProps: { formulas: formulas },
      event: ev,
      translucent: true
    });
    await popover.present();
  }

}
