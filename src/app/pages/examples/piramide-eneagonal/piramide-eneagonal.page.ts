import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piramide-eneagonal',
  templateUrl: './piramide-eneagonal.page.html',
  styleUrls: ['./piramide-eneagonal.page.scss'],
})
export class PiramideEneagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
