import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piramide-hexagonal',
  templateUrl: './piramide-hexagonal.page.html',
  styleUrls: ['./piramide-hexagonal.page.scss'],
})
export class PiramideHexagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
