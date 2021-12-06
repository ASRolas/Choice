import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AutenticacaoComponent } from './components/autenticacao/autenticacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { exportacoes } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RegistoComponent } from './components/registo/registo.component';
import { PerfilRestauranteComponent } from './components/perfil-restaurante/perfil-restaurante.component';
import { MenuComponent } from './components/menu/menu.component';
import { SimulatorComponent } from './components/simulator/simulator.component';



@NgModule({
  declarations: [
    exportacoes,
    AppComponent,
    HomeComponent,
    AutenticacaoComponent,
    RegistoComponent,
    PerfilRestauranteComponent,
    MenuComponent,
    SimulatorComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
