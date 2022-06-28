import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { AdditemComponent } from './components/additem/additem.component';

const routes: Routes = [
  {
    path: 'shopping',
    component: ShoppingcartComponent
  },
  {
    path: 'add',
    component: AdditemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
