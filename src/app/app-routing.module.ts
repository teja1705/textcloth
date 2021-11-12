import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MenComponent } from './components/men/men.component';
import { QuickviewComponent } from './components/quickview/quickview.component';
import { SaleComponent } from './components/sale/sale.component';
import { ShopallComponent } from './components/shopall/shopall.component';
import { WomenComponent } from './components/women/women.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'shopall',
    component:ShopallComponent
  },
  {
    path:'men',
    component:MenComponent
  },
  {
    path:'women',
    component:WomenComponent
  },
  {
    path:'sale',
    component:SaleComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'product/quickview',
    component:QuickviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
