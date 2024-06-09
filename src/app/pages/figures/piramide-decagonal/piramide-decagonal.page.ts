import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piramide-decagonal',
  templateUrl: './piramide-decagonal.page.html',
  styleUrls: ['./piramide-decagonal.page.scss'],
})
export class PiramideDecagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
