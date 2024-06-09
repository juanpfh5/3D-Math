import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piramide-heptagonal',
  templateUrl: './piramide-heptagonal.page.html',
  styleUrls: ['./piramide-heptagonal.page.scss'],
})
export class PiramideHeptagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
