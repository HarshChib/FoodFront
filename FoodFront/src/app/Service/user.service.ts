import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  addUser(user:any){
    return this.http.post("serve/adduser",user);
  }
  loginUser(user:any){
    return this.http.post(`serve/loginuser`,user);
  }
  getUser(id:any){
    return this.http.get(`serve/getuser/${id}`);
  }
  updateUser(user:any,id:any){
    return this.http.put(`serve/updateuser/${id}`,user);
  }
}
