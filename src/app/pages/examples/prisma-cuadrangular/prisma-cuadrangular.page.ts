import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prisma-cuadrangular',
  templateUrl: './prisma-cuadrangular.page.html',
  styleUrls: ['./prisma-cuadrangular.page.scss'],
})
export class PrismaCuadrangularPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
