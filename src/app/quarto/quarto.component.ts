import { ToastrService } from 'ngx-toastr';
import { ReservaService } from 'src/app/services/reserva.service';
import { QuartoService } from './../services/quarto.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TypeInput } from '../enum/type-input.enum';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.css']
})
export class QuartoComponent implements OnInit {
  public quarto;
  public quartos;
  public reservaForm;
  lat = 51.678418;
  lng = 7.809007;
  public typeInput = TypeInput;

  constructor(private quartoService: QuartoService, private route: ActivatedRoute, private formBuilder: FormBuilder,
    private reservaService: ReservaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.quartoService.getQuarto(params.quartoId).subscribe(quarto => {
        this.quarto = quarto;

        this.reservaForm = this.formBuilder.group({
          quartoId: [this.quarto.quartoId, [Validators.required]],
          usuarioId: [1, [Validators.required]],
          dataInicio: ['', [Validators.required]],
          dataFim: ['', [Validators.required]],
          valor: [this.quarto.valor, [Validators.required]],
        });
        this.quartoService.getQuartoByHotel(this.quarto.hotel.hotelId).subscribe(quartos => this.quartos = quartos);
      });
    });
  }

  public fazerReserva() {
    this.reservaService.setReserva(this.reservaForm.value).subscribe(() => this.toastr.success('Reserva Realizada com Sucesso!'),
      e => this.toastr.success('Nao foi possivel fazer reserva'));
  }

}
