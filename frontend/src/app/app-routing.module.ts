import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

const routes: Routes = [
  {
    path: 'shopping',
    component: ShoppingcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
