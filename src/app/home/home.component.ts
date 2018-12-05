import { HotelService } from './../services/hotel.service';
import { QuartoService } from './../services/quarto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public quartos;
  public hoteis;
  public hotelForm;

  constructor(private quartoService: QuartoService, private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router, private hotelService: HotelService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.hotelForm = this.formBuilder.group({
        nome: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        periodo: ['', [Validators.required]],
      });
      this.quartoService.getQuartos(params).subscribe(quartos => this.quartos = quartos);
      this.hotelService.getHoteis().subscribe(hoteis => this.hoteis = hoteis);
    });
  }

  public pesquisar() {
    this.router.navigate(['/home'], { queryParams: this.hotelForm.value });
  }
}
