import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prisma-hexagonal',
  templateUrl: './prisma-hexagonal.page.html',
  styleUrls: ['./prisma-hexagonal.page.scss'],
})
export class PrismaHexagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
