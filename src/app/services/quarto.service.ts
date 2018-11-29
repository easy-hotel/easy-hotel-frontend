import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {

  constructor(private http: HttpClient) { }

  getQuarto(params) {
    return this.http.get(`/quarto/${params}`);
  }

  getQuartos() {
    return this.http.get(`/quarto`);
  }

  getQuartoByHotel(params) {
    // return this.http.get(`quarto`);
  }
}
