import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piramide-triangular',
  templateUrl: './piramide-triangular.page.html',
  styleUrls: ['./piramide-triangular.page.scss'],
})
export class PiramideTriangularPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
