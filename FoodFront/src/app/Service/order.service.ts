import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  addorder(id:any){
    return this.http.post(`serve/addOrder/${6}`,id);
  }
  getOrder(id:any){
    return this.http.get(`serve/order/${id}`);
  }
}
