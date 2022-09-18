import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsService } from '../Service/items.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  constructor(private items:ItemsService,private router:Router) { }

  ngOnInit(): void {
  }
  additem(form:NgForm){
    console.log(form.value);
    this.items.additem(form.value).subscribe((res)=>{
      console.log(res);
      window.alert("the menu is saved");
    })
  

  }

}
