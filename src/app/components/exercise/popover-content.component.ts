import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-popover-content',
    template: `
    <ion-content class="ion-padding exclude-bg">
        <h3>Resultados</h3>
        <ul>
            <li *ngFor="let resultado of resultados">{{ resultado }}<br></li>
        </ul>
    </ion-content>
    `,
    styleUrls: ['./help-popover.component.scss'],
})
export class PopoverContentComponent {
    @Input() resultados: string[] = [];
}
