import { QuartoComponent } from './quarto/quarto.component';
import { ReservaDetalhesComponent } from './reserva/reserva-detalhes/reserva-detalhes.component';
import { ReservaListaComponent } from './reserva/reserva-lista/reserva-lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HotelComponent } from './hotel/hotel.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'hotel/:hotelId', component: HotelComponent },
      { path: 'cadastro', component: CadastroComponent },
      {
        path: 'reserva', children: [
          { path: '', component: ReservaListaComponent },
          { path: ':id', component: ReservaDetalhesComponent }
        ]
      },
      { path: 'quarto/:quartoId', component: QuartoComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
