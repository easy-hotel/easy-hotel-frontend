import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroquartoService } from '../services/cadastroquarto.service';

@Component({
  selector: 'app-cadastroquarto',
  templateUrl: './cadastroquarto.component.html',
  styleUrls: ['./cadastroquarto.component.css']
})
export class CadastroquartoComponent implements OnInit {
  public cadastroquartoForm;
  constructor(private formBuilder: FormBuilder, private router: Router, private cadastroquartoService: CadastroquartoService) {
    this.cadastroquartoForm = this.formBuilder.group({
      descricao: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      hotel: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  public cadastrar() {
      this.cadastroquartoService.cadastrar(this.cadastroquartoForm.value).subscribe(arg => console.log(arg));

  }
}
