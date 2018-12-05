import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotel(hotelId) {
    return this.http.get(`/hotel/${hotelId}`);
  }

  getHoteis() {
    return this.http.get(`/hotel`);
  }
}
