import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'textcloth';
  constructor(private route : Router){}
  navigateToShopAll(){
    this.route.navigate(['shopall']);
  }
  navigateToMen(){
    this.route.navigate(['men']);
  }
  navigateToWomen(){
    this.route.navigate(['women']);
  }
  navigateToHomePage(){
    this.route.navigate(['']);
  }
  navigateToSale(){
    this.route.navigate(['sale']);
  }
  navigateToContact(){
    this.route.navigate(['contact']);
  }
  navigateToAbout(){
    this.route.navigate(['about']);
  }
}
