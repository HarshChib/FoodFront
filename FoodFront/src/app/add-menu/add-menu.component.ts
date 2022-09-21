import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../Service/menu-service.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  result: any;
  user_id = localStorage.getItem('id');
  isLoading=false;
  constructor(
    private menu: MenuServiceService
  ) {}

  ngOnInit(): void {
    this.menu.getData(this.user_id).subscribe((data) => {
      this.result = data;
      this.isLoading=true;
      console.log(this.result);
    });
  }
}
