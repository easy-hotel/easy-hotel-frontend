import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  public cadastrar(usuario) {
    return this.http.post(`/Usuarios`, usuario);
  }
}
