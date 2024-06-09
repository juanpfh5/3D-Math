import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prisma-eneagonal',
  templateUrl: './prisma-eneagonal.page.html',
  styleUrls: ['./prisma-eneagonal.page.scss'],
})
export class PrismaEneagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
