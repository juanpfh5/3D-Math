import { Component, Input, AfterViewInit } from '@angular/core';

declare var MathJax: any;

@Component({
    selector: 'app-help-popover',
    template: `
    <ion-content class="ion-padding exclude-bg">
        <h3>Recordatorio de Fórmulas</h3>
        <div [innerHTML]="formulas"></div>
    </ion-content>
    `,
    styleUrls: ['./help-popover.component.scss'],
    })
    export class HelpPopoverComponent implements AfterViewInit {
    @Input() formulas: string = '';

    ngAfterViewInit() {
    this.renderMathJax();
    }

    renderMathJax() {
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise();
    }
    }
}
