import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prisma-decagonal',
  templateUrl: './prisma-decagonal.page.html',
  styleUrls: ['./prisma-decagonal.page.scss'],
})
export class PrismaDecagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
