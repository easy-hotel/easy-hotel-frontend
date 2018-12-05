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
  public quartoForm;

  constructor(private quartoService: QuartoService, private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router, private hotelService: HotelService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.quartoForm = this.formBuilder.group({
        cidade: ['', [Validators.required]],
        valorMin: ['', [Validators.required]],
        valorMax: ['', [Validators.required]],
        classificacao: ['', [Validators.required]]
      });
      this.quartoService.getQuartos(params).subscribe(quartos => this.quartos = quartos);
      this.hotelService.getHoteis().subscribe(hoteis => this.hoteis = hoteis);
    });
  }

  public pesquisar() {
    this.router.navigate(['/home'], { queryParams: this.quartoForm.value });
  }
}
