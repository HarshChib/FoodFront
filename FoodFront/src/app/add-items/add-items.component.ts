import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../Service/items.service';
import { MenuServiceService } from '../Service/menu-service.service';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css'],
})
export class AddItemsComponent implements OnInit {
  result: any;
  quantity: any;
  user_id = localStorage.getItem('id');
  map = new Map<any, any>();
  total=0
  cName:any;
  cNumber:any;
  order_id=localStorage.getItem('order_id');
  constructor(
    private menu: MenuServiceService,
    private items_service: ItemsService,
    private order: OrderService
  ) {}

  ngOnInit(): void {
    
    this.order.getOrder(this.order_id).subscribe((data) => {
      this.result = data;
      console.log(this.result);
      
      this.cName=this.result.customerName
      this.cNumber=this.result.contactNumber
    });
    this.menu.getData(this.user_id).subscribe((data) => {
      this.result = data;

      console.log(this.result);
    });
  }
  delete_items(id: any) {
    if (this.map.get(id) == 1) {
      this.map.delete(id);
    } else {
      this.map.set(id, this.map.get(id) - 1);
    }
    this.total-=id.price
  }
  items_list(id: any) {
    if (this.map.has(id)) {
      this.map.set(id, this.map.get(id) + 1);
    } else {
      this.map.set(id, 1);
    }
    this.total+=id.price
  }

  finalize() {
    this.map.forEach((value: any, key: any) => {
      let item = {
        productId: key.id,
        name: key.name,
        type: key.type,
        quantity: value,
        price: key.price,
      };
      this.items_service
        .additem(item, localStorage.getItem('order_id'))
        .subscribe((res) => {
          console.log(res);
        });
    });
    let updated_status = {
      id: localStorage.getItem('order_id'),
      totalPrice:this.total
    };
    this.order.finalize_order(updated_status).subscribe((res) => {
      console.log(res);
    });
  }
}
