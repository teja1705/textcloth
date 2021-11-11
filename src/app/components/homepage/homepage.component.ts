import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  navigateToShopAll(){
    this.route.navigate(['shopall']);
  }
  navigateToMen(){
    this.route.navigate(['men']);
  }
  navigateToWomen(){
    this.route.navigate(['women']);
  }
  navigateToSale(){
    this.route.navigate(['sale']);
  }
}
