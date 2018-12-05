import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastroquartoService {

  constructor(private http: HttpClient) { }

  public cadastrar(quarto) {
    return this.http.post(`/Quarto`, quarto);
  }
}
