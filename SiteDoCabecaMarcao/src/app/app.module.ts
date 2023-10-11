import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal/principal.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [PrincipalComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
