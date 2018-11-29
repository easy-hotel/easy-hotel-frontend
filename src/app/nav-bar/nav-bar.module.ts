import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoginModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule { }
