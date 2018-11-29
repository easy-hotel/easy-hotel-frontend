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

  public quartoForm = this.formBuilder.group({
    cidade: ['', [Validators.required]],
    valorMin: ['', [Validators.required]],
    valorMax: ['', [Validators.required]],
    classificacao: ['', [Validators.required]]
  });

  constructor(private quartoService: QuartoService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.quartoService.getQuartos(params).subscribe(data => this.quartos = data);
    });
  }

  public pesquisar() {
    this.router.navigate(["/home"],{queryParams:this.quartoForm.value});
  }
}
