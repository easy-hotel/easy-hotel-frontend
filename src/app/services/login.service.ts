
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  getListUser() {
    return this.http.get(`/Usuarios`);
  }

  auth(params) {
    return this.http.post(`/Auth`, params);
  }
}
