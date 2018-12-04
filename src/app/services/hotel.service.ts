import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotel(params) {
    return this.http.get(`/hotel/${params}`);
  }

  getHotels() {
    return this.http.get(`/hotel`);
  }
}
