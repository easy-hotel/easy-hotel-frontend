import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  public cadastroForm;
  constructor(private formBuilder: FormBuilder, private router: Router, private cadastroService: CadastroService) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      csenha: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  public cadastrar() {
    if (this.cadastroForm.value.senha === this.cadastroForm.value.csenha) {
      this.cadastroService.cadastrar(this.cadastroForm.value).subscribe(arg => console.log(arg));
    }
  }
}
