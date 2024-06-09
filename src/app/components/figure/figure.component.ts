// import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
// import { Howl } from 'howler';

// declare var MathJax: any;

// @Component({
//   selector: 'app-figure',
//   templateUrl: './figure.component.html',
//   styleUrls: ['./figure.component.scss'],
// })
// export class FigureComponent implements OnInit, AfterViewInit {

//   @Input() ruta: string = '';
//   @Input() titulo: string = '';
//   @Input() texto: string = '';
//   @Input() audioRuta: string = '';

//   audio: Howl | null = null;

//   constructor() { }

//   ngOnInit() {}

//   ngAfterViewInit() {
//     // Espera a que la vista esté inicializada para procesar las fórmulas matemáticas
//     MathJax.typeset();
//   }

//   playAudio(audioPath: string) {
//     // Verifica si el audio ya está reproduciéndose
//     if (this.audio && this.audio.playing()) {
//       return; // Si está reproduciéndose, no hagas nada
//     }

//     // Si el audio no está reproduciéndose, crea una nueva instancia de Howl y reproduce el audio
//     this.audio = new Howl({
//       src: [audioPath],
//       onend: () => {
//         // Se ejecuta cuando la reproducción del audio termina
//         if (this.audio) {
//           this.audio.unload(); // Libera la instancia de Howl
//           this.audio = null;   // Asegúrate de liberar la referencia
//         }
//       }
//     });

//     this.audio.play();
//   }
// }


import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
// import { Howl } from 'howler';
import { AudioService } from '../../services/audio.service';

declare var MathJax: any;

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss'],
})
export class FigureComponent implements OnInit, AfterViewInit {

  @Input() ruta: string = '';
  @Input() titulo: string = '';
  @Input() texto: string = '';
  @Input() audioRuta: string = '';

  constructor(private audioService: AudioService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // Espera a que la vista esté inicializada para procesar las fórmulas matemáticas
    MathJax.typeset();
  }

  playAudio(audioPath: string) {
    if (this.audioService.isAudioPlaying()) {
      return; // Si ya hay un audio reproduciéndose, no hagas nada
    }

    this.audioService.playAudio(audioPath);
  }
}
