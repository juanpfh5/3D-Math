import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piramide-cuadrangular',
  templateUrl: './piramide-cuadrangular.page.html',
  styleUrls: ['./piramide-cuadrangular.page.scss'],
})
export class PiramideCuadrangularPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
