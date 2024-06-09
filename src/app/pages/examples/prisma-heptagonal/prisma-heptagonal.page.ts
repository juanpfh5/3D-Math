import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prisma-heptagonal',
  templateUrl: './prisma-heptagonal.page.html',
  styleUrls: ['./prisma-heptagonal.page.scss'],
})
export class PrismaHeptagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
