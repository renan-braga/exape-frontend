import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteracaoComponent } from './components/interacao/interacao.component';
import { ChamadoComponent } from './components/chamado/chamado.component';

@NgModule({
  declarations: [
    AppComponent,
    InteracaoComponent,
    ChamadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
