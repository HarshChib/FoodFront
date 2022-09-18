import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../Service/order.service';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(private orders:OrderService,private router:Router) { }

  ngOnInit(): void {
  }
  addOrder(form:NgForm){
    console.log(form.value);
    this.orders.addorder(form.value).subscribe((res)=>{
      console.log(res);
      window.alert("the order is saved")
      this.router.navigate(['/orders'])
    })
    

    
  }

}
