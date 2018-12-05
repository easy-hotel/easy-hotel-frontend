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

  getReserva(reservaId) {
    return this.http.get(`/reserva/${reservaId}`);
  }

  removeReserva(reservaId) {
    return this.http.delete(`/reserva/${reservaId}`);
  }

  setReserva(reserva) {
    return this.http.post(`/reserva`, reserva);
  }

}
