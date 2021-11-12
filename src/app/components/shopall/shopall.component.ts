import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopall',
  templateUrl: './shopall.component.html',
  styleUrls: ['./shopall.component.scss']
})
export class ShopallComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  navigateToQuickView(){
    this.route.navigate(['product/quickview'])
  }
}
