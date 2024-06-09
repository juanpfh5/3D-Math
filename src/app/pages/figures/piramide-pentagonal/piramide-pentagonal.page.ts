import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-piramide-pentagonal',
  templateUrl: './piramide-pentagonal.page.html',
  styleUrls: ['./piramide-pentagonal.page.scss'],
})
export class PiramidePentagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
