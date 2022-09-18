import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private http:HttpClient) { }

  getData(user_id:any){
    return this.http.get(`server/getmenu/${user_id}`);
  }
}
