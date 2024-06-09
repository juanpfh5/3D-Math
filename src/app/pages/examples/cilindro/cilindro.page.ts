import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cilindro',
  templateUrl: './cilindro.page.html',
  styleUrls: ['./cilindro.page.scss'],
})
export class CilindroPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnotherPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
