import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroquartoComponent } from './cadastroquarto.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [CadastroquartoComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
    FormsModule
  ]
})
export class CadastroquartoModule { }
