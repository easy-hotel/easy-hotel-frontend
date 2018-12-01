import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  getReservas() {
    return this.http.get(`/reserva`);
  }

  getReserva(params) {
    return this.http.get(`/reserva/${params}`);
  }

  removeReserva(params) {
    return this.http.delete(`/reserva/${params}`);
  }

}
