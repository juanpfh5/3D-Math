import { Component, Input } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular'; // Asegúrate de importar PopoverController

@Component({
    selector: 'app-popover-content',
    template: `
    <ion-content class="ion-padding exclude-bg">
        <h3>Resultados</h3>
        <ul>
            <li *ngFor="let resultado of resultados">{{ resultado }}<br></li>
        </ul>
        <ion-button class="returnToMenu" expand="block" (click)="navigateToMenu()">Regresar al Menú</ion-button>
    </ion-content>
    `,
    styleUrls: ['./help-popover.component.scss'],
})
export class PopoverContentComponent {
    @Input() resultados: string[] = [];

    constructor(private navCtrl: NavController, private popoverCtrl: PopoverController) {} // Inyecta PopoverController

    async navigateToMenu() {
    await this.popoverCtrl.dismiss(); // Cierra el popover
    this.navCtrl.navigateRoot('/menu'); // Navega al menú
    }
}

