import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {

  ProductDetails : FormGroup

  constructor(private fb : FormBuilder, private route : Router) { }

  ngOnInit(): void {
    this.ProductDetails = this.fb.group({
      size : ['',Validators.required],
      quantity : ['', Validators.required]
    })
  }

  navigateToHomePage(){
    this.route.navigate(['']);
  }

  get getSize(){
    return this.ProductDetails.get('size')
  }

  get getQuantity(){
    return this.ProductDetails.get('quantity')
  }
  navigateToQuickView(){
    this.route.navigate(['product/quickview'])
  }

}
