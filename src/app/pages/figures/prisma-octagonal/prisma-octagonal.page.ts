import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prisma-octagonal',
  templateUrl: './prisma-octagonal.page.html',
  styleUrls: ['./prisma-octagonal.page.scss'],
})
export class PrismaOctagonalPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
