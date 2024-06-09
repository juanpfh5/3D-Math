import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HelpPopoverComponent } from '../../../components/exercise/help-popover.component';

@Component({
  selector: 'app-prisma-triangular',
  templateUrl: './prisma-triangular.page.html',
  styleUrls: ['./prisma-triangular.page.scss'],
})
export class PrismaTriangularPage implements OnInit {

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
    const num1 = Math.floor(Math.random() * 50) + 1; // lado 1
    const num2 = Math.floor(Math.random() * 10) + 1; // lado 2
    const num3 = Math.floor(Math.random() * 50) + 1; // lado 3
    const num4 = Math.floor(Math.random() * 50) + 1; // base
    const num5 = Math.floor(Math.random() * 50) + 1; // altura t
    const num6 = Math.floor(Math.random() * 50) + 1; // altura prisma

    if (option === -1) {
      option = Math.floor(Math.random() * this.operations.length);
    }
    var operation = this.operations[option];

    let pregunta: string = '';
    let respuesta: number = 0;
    let ruta: string = '';

    switch (option) {
      case 0: // Perímetro de la base
        pregunta = `Calcular ${operation} de un prisma triangular cuyos valores de <strong>x</strong>, <strong>y</strong> y <strong>z</strong> son ${num1}, ${num2} y ${num3}, respectívamente.`;
        respuesta = num1 + num2 + num3;
        ruta = 'assets/images/prisma_triangular/fig_1.jpg';
        break;
      case 1: // Área de la base
        pregunta = `Calcular ${operation} de un prisma triangular cuya base es <strong>b = ${num4}</strong> y cuya altura es <strong>t = ${num5}</strong>.`;
        respuesta = (1/2) * num4 * num5;
        ruta = 'assets/images/prisma_triangular/fig_2.jpg';
        break;
      case 2: // Área lateral
        pregunta = `Calcular ${operation} de un prisma triangular cuyos valores de <strong>x</strong>, <strong>y</strong>, <strong>z</strong> y <strong>h</strong> son ${num1}, ${num2}, ${num3} y ${num6}, respectívamente.`;
        respuesta = (num1 + num2 + num3) * num6;
        ruta = 'assets/images/prisma_triangular/figure_static.jpg';
        break;
      case 3: // Área total
        pregunta = `Calcular ${operation} de un prisma triangular cuyos valores de <strong>x</strong>, <strong>y</strong>, <strong>z</strong> son ${num1}, ${num2} y ${num3}, respectívamente. De igual forma, esta figura cuenta con una base de <strong>b = ${num4}</strong>, una altura del triángulo de <strong>t = ${num5}</strong> y una altura del prisma de ${num6}.`;
        respuesta = (1/2) * num4 * num5 + ((num1 + num2 + num3) * num6);
        ruta = 'assets/images/prisma_triangular/fig_1.jpg';
        break;
      case 4: // Volumen
        pregunta = `Calcular ${operation} de un prisma triangular cuya base es <strong>b = ${num4}</strong>, cuya altura del triángulo es <strong>t = ${num5}</strong> y cuya altura del prisma es <strong>h = ${num6}</strong>.`;
        respuesta = (1/2) * num4 * num5 * num6;
        ruta = 'assets/images/prisma_triangular/fig_2.jpg';
        break;
      default:
        respuesta = 0;
        ruta = 'assets/images/prisma_triangular/figure.gif';
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
      <p><strong>Perímetro de la base</strong>: <br> <span>$$P = x + y + z$$</span></p>
      <p><strong>Área de la base</strong>: <br> <span>$$A_{base} = \\frac{1}{2} b t$$</span></p>
      <p><strong>Área lateral</strong>: <br> <span>$$A_{lateral} = P h$$</span></p>
      <p><strong>Área total</strong>: <br> <span>$$A_{total} = 2 A_{base} + A_{lateral}$$</span></p>
      <p><strong>Volumen</strong>: <br> <span>$$V = A_{base} h$$</span></p>
      Donde <strong>b</strong> es la longitud de la base del triángulo, <strong>t</strong> es la altura del triángulo y <strong>h</strong> es la altura del prisma. Si los lados del triángulo tienen longitudes <strong>x</strong>, <strong>y</strong> y <strong>z</strong>, entonces el perímetro se calcula como la suma de estas longitudes.
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
