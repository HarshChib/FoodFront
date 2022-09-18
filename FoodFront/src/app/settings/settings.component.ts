import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  data:any;
  constructor(private user:UserService,private route:Router) { }
  ngOnInit(): void {
    this.user.getUser(localStorage.getItem('id')).subscribe((res)=>{
        console.log(res);
        this.data=res;
        console.log(this.data.name);
      })
   }
  updateUser(form:NgForm){
    console.log(form.value);
    this.user.updateUser(form.value,localStorage.getItem('id')).subscribe((res)=>{
      console.log(res);
    })
    this.go();
  }
  go(){
		this.route.navigate(['/dashboard/cards']); // navigate to other page
	}
}
