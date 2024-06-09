import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cono',
  templateUrl: './cono.page.html',
  styleUrls: ['./cono.page.scss'],
})
export class ConoPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
