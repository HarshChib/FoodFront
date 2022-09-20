import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-finalized-order-details',
  templateUrl: './finalized-order-details.component.html',
  styleUrls: ['./finalized-order-details.component.css']
})
export class FinalizedOrderDetailsComponent implements OnInit {
  result:any;
  constructor(private order:OrderService) { }

  ngOnInit(): void {
    this.order.getOrder(localStorage.getItem("order_id")).subscribe((data) => {
      this.result = data;
      console.log(this.result);
      
    });
  }

}
