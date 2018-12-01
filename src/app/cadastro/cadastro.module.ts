import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class CadastroModule { }
