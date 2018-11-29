import { QuartoService } from './../services/quarto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private quartos;

  constructor(private quartoService: QuartoService) { }

  ngOnInit() {
    this.quartoService.getQuartos().subscribe(data => this.quartos = data);
  }

}
