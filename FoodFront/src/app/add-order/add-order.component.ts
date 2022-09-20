import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  data: any;
  constructor(private orders: OrderService, private router: Router) {}

  ngOnInit(): void {}
  addOrder(form: NgForm) {
    console.log(form.value);
    if (form.value.customerName.length < 10) {
      window.alert('Customer name should contain atleast 10 letters');
    } 
    else if(form.value.contactNumber.length !=10){
      window.alert('Customer name should contain atleast 10 letters');
    }
    else {
      this.orders
        .addorder(form.value, localStorage.getItem('id'))
        .subscribe((res) => {
          console.log(res);
          this.data = res;
          localStorage.setItem('order_id', this.data.id);
          this.router.navigate(['/dashboard/add_item']);
        });
    }
  }
}
