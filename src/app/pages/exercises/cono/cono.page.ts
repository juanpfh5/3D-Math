import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HelpPopoverComponent } from '../../../components/exercise/help-popover.component';

@Component({
  selector: 'app-cono',
  templateUrl: './cono.page.html',
  styleUrls: ['./cono.page.scss'],
})
export class ConoPage implements OnInit {

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
    const num1 = Math.floor(Math.random() * 50) + 1; // radio
    const num2 = 3.1416; // pi
    const num3 = Math.floor(Math.random() * 50) + 1; // altura

    if (option === -1) {
      option = Math.floor(Math.random() * this.operations.length);
    }
    var operation = this.operations[option];

    let pregunta = `Calcular ${operation} de un cono cuyo radio es <strong>r = ${num1}</strong> y cuya altura es <strong>h = ${num3}</strong>. Toma en consideranción que el valor de π será <strong>π = ${num2}</strong>.`;
    let respuesta: number = 0;
    let ruta: string = '';

    switch (option) {
      case 0: // Perímetro de la base
        respuesta = 2 * num2 * num1;
        ruta = 'assets/images/cono/fig_1.jpg';
        break;
      case 1: // Área de la base
        respuesta = num2 * Math.pow(num1, 2);
        ruta = 'assets/images/cono/fig_2.jpg';
        break;
      case 2: // Área lateral
        respuesta = num2 * num1 * Math.sqrt(Math.pow(num1, 2) + Math.pow(num3, 2));
        ruta = 'assets/images/cono/fig_3.jpg';
        break;
      case 3: // Área total
        respuesta = num2 * num1 * (num1 + Math.sqrt(Math.pow(num1, 2) + Math.pow(num3, 2)));
        ruta = 'assets/images/cono/fig_4.jpg';
        break;
      case 4: // Volumen
        respuesta = (1/3) * num2 * Math.pow(num1, 2) * num3;
        ruta = 'assets/images/cono/figure_static.jpg';
        break;
      default:
        respuesta = 0;
        ruta = 'assets/images/cono/figure.gif';
        break;
    }

    return {
      pregunta,
      respuesta: respuesta.toFixed(2).toString(),
      ruta
    };
  }

  async presentHelpPopover(ev: Event) {
    // const formulas = "<strong>Perímetro (Circunferencia)</strong>: $$P = 2 \pi r$$<strong>Área de la base (A)</strong>: $$A = 4 \pi r^2$$<strong>Volumen de la figura (V)</strong>: $$V = \frac{4}{3} \pi r^3$$Donde 'r' es el radio de la esfera y π (pi) es una constante aproximadamente igual a 3.1416.";
    const formulas = `
      <p><strong>Perímetro (Circunferencia de la base)</strong>: <br> <span>$$P = 2 \\pi r $$</span></p>
      <p><strong>Área de la base</strong>: <br> <span>$$A_{base} = \\pi r^2 $$</span></p>
      <p><strong>Área lateral</strong>: <br> <span>$$A_{lateral} = \\pi r s $$</span></p>
      <p><li><strong>Generatriz</strong>: <br> <span>$$s = \\sqrt{r^2 + h^2}$$</li></p>
      <p><strong>Área total</strong>: <br> <span>$$A_{total} = \\pi r (r + s) $$</span></p>
      <p><strong>Volumen</strong>: <br> <span>$$V = \\frac{1}{3} \\pi r^2 h $$</span></p>
      Donde <strong>r</strong> es el radio de la esfera, <strong>π</strong> (pi) es una constante aproximadamente igual a 3.1416, <strong>s</strong> es la longitud de la generatriz (o el lado inclinado) del cono y <strong>h</strong> es la altura del cono.
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
