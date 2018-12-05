import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrohotelComponent } from './cadastrohotel.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastrohotelComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class CadastrohotelModule { }
