import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  additem(id:any){
    return this.http.post(`serve/additem/${2}`,id);
  }
  getitems(){
    return this.http.get("serve/getitems");
  }
 
  getData(user_id:any){
    return this.http.get(`server/getmenu/${user_id}`);
  }
}
