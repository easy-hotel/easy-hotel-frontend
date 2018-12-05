import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastrohotelService } from '../services/cadastrohotel.service';

@Component({
  selector: 'app-cadastrohotel',
  templateUrl: './cadastrohotel.component.html',
  styleUrls: ['./cadastrohotel.component.css']
})
export class CadastrohotelComponent implements OnInit {
  public cadastrohotelForm;
  constructor(private formBuilder: FormBuilder, private router: Router, private cadastrohotelService: CadastrohotelService) {
    this.cadastrohotelForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  public cadastrar() {
      this.cadastrohotelService.cadastrar(this.cadastrohotelForm.value).subscribe(arg => console.log(arg));

  }
}
