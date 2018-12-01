import { SessionService } from './../services/session.service';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private session: SessionService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.loginService.getListUser().subscribe(data => console.log(data));
  }

  public logar() {
    this.loginService.auth(this.loginForm.value).subscribe(data => {
      this.session.setItem('easy-hotel-auth', data);
    });
  }

  public cadastrar() {
    this.router.navigate(['cadastro']);
  }

}
