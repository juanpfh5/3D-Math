import { Component, OnInit, Input } from '@angular/core';

declare var MathJax: any;

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    MathJax.typeset();
  }

  @Input() ruta: string = '';
  @Input() titulo: string = '';
  @Input() texto: string = '';

}
