import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../Service/menu-service.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  result: any
  constructor(private menu:MenuServiceService) { }

  ngOnInit(): void {
    this.menu.getData(localStorage.getItem('id')).subscribe((data)=>{
      this.result=data;
      console.log(this.result);
  }

    )
}
}
