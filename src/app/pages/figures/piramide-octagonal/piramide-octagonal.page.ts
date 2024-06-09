import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piramide-octagonal',
  templateUrl: './piramide-octagonal.page.html',
  styleUrls: ['./piramide-octagonal.page.scss'],
})
export class PiramideOctagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
