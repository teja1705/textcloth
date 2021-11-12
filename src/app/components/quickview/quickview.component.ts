import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {

  Quantity : number
  error_text_quantity : Boolean = false

  constructor(private fb : FormBuilder, private route : Router) { }

  ngOnInit(): void {
    this.Quantity = 1
  }

  navigateToHomePage(){
    this.route.navigate(['']);
  }
  navigateToQuickView(){
    this.route.navigate(['product/quickview'])
  }
  minus(){
    if(this.Quantity>1){
      this.Quantity = this.Quantity - 1;
      this.error_text_quantity = false
    }
  }
  plus(){
    this.Quantity = Number(this.Quantity) + 1;
    this.error_text_quantity = false
  }
  check(event : Event){
    const value = (event.target as HTMLInputElement).value;
    if(Number(value)<1){
      this.error_text_quantity = true;
    }
    else{
      this.error_text_quantity = false;
    }
  }

}
