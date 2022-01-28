import { Component, OnInit } from '@angular/core';
//import countries from '';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  //products: any = [];
  title = 'json-file-read-angular';
  public countryList:{name:string, code:string}[] = countries;
  constructor() { }

  ngOnInit(): void {
    //  this.httpClient.get("assets/data.json").subscribe(data =>{
    //   console.log(data);
    //   this.products = data;
    // })
  }

}
