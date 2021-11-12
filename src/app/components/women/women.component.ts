import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  navigateToQuickView(){
    this.route.navigate(['product/quickview'])
  }
}
