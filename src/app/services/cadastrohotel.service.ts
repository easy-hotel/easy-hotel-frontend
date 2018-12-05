import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastrohotelService {

  constructor(private http: HttpClient) { }

  public cadastrar(hotel) {
    return this.http.post(`/Hotel`, hotel);
  }
}
