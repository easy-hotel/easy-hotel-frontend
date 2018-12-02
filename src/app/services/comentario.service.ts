import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  public cadastrar(comentario) {
    return this.http.post(`/Comentario`, comentario);
  }

  public getByQuartoId(quartoId) {
    return this.http.get(`/Comentario/${quartoId}`);
  }
}
