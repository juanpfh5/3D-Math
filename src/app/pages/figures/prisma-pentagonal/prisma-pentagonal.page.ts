import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prisma-pentagonal',
  templateUrl: './prisma-pentagonal.page.html',
  styleUrls: ['./prisma-pentagonal.page.scss'],
})
export class PrismaPentagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
