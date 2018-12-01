import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reserva-lista',
  templateUrl: './reserva-lista.component.html',
  styleUrls: ['./reserva-lista.component.css']
})
export class ReservaListaComponent implements OnInit {
  public reservas;

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.reservaService.getReservas().subscribe(data => this.reservas = data);
  }

  public remove(reservaId) {
    this.reservaService.removeReserva(reservaId).subscribe(data => console.log(data));
  }

}
