import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsService } from '../Service/items.service';
import { MenuServiceService } from '../Service/menu-service.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  result: any

  user_id= localStorage.getItem("id");

  constructor(private menu:MenuServiceService) { }



  ngOnInit(): void {

    this.menu.getData(this.user_id).subscribe((data)=>{

      this.result=data;

      console.log(this.result);
    })
  

  }

}
