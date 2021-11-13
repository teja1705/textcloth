import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'textcloth';
  spinner : Boolean = false
  menu : boolean = true
  constructor(private route : Router){}
  navigateToShopAll(){
    this.route.navigate(['shopall']);
    document.getElementById("sideNav").style.width = "0px";
    this.menu = !this.menu;
  }
  navigateToMen(){
    this.route.navigate(['men']);
    document.getElementById("sideNav").style.width = "0px";
    this.menu = !this.menu;
  }
  navigateToWomen(){
    this.route.navigate(['women']);
    document.getElementById("sideNav").style.width = "0px";
    this.menu = !this.menu;
  }
  navigateToHomePage(){
    this.route.navigate(['']);
    document.getElementById("sideNav").style.width = "0px";
    this.menu = !this.menu;
  }
  navigateToSale(){
    this.route.navigate(['sale']);
    document.getElementById("sideNav").style.width = "0px";
    this.menu = !this.menu;
  }
  navigateToContact(){
    this.route.navigate(['contact']);
    document.getElementById("sideNav").style.width = "0px";
    this.menu = !this.menu;
  }
  navigateToAbout(){
    this.route.navigate(['about']);
    document.getElementById("sideNav").style.width = "0px";
    this.menu = !this.menu;
  }
  navigateToShoppingCart(){
    this.route.navigate(['shoppingcart']);
  }

  displayMenu(){
    this.menu = !this.menu;
    if(this.menu){
      document.getElementById("sideNav").style.width = "0px";
    }
    if(!this.menu){
      document.getElementById("sideNav").style.width = "300px";
    }
  }
}
