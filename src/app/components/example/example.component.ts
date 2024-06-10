import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

declare var MathJax: any;

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent  implements OnInit {

  ngAfterViewInit() {
    MathJax.typeset();
  }

  @Input() ruta: string = '';
  @Input() titulo: string = '';
  @Input() texto: string = '';
  @Input() tipo: string = ''; // 'prisma' o 'piramide'

  sanitizedText: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sanitizedText = this.sanitizer.bypassSecurityTrustHtml(this.texto);
  }
  
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

}
