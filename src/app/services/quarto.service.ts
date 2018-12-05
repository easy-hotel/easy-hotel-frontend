import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {

  constructor(private http: HttpClient) { }

  getQuarto(quartoId) {
    return this.http.get(`/quarto/${quartoId}`);
  }

  getQuartos(params) {
    return this.http.get(`/quarto/`, { params: params });
  }

  getQuartoByHotel(hotelId) {
    return this.http.get(`/quarto/hotel/${hotelId}`);
  }
}
