import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prisma-triangular',
  templateUrl: './prisma-triangular.page.html',
  styleUrls: ['./prisma-triangular.page.scss'],
})
export class PrismaTriangularPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
