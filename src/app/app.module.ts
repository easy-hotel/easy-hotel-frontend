import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ReservaModule } from './reserva/reserva.module';
import { HotelModule } from './hotel/hotel.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { LoginModule } from './login/login.module';
import { MyHttpInterceptor } from './http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { QuartoModule } from './quarto/quarto.module';
import { CadastrohotelModule } from './cadastrohotel/cadastrohotel.module';
import { CadastroquartoModule } from './cadastroquarto/cadastroquarto.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    HttpModule,
    HttpClientModule,
    HomeModule,
    FooterModule,
    ReservaModule,
    HotelModule,
    QuartoModule,
    CadastroModule,
    CadastrohotelModule,
    CadastroquartoModule,
    LoginModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule,
    NgxUiLoaderRouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
