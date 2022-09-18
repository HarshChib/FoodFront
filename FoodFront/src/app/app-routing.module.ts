import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {path:"orders",component:OrderDetailsComponent},
  {path:"add-order",component:AddOrderComponent},
  {path:"add-item",component:AddItemsComponent},
  {path:"items",component:ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
