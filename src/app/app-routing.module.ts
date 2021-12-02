import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AutenticacaoComponent } from './components/autenticacao/autenticacao.component';
import { RegistoComponent } from './components/registo/registo.component';
import { PerfilRestauranteComponent } from './components/perfil-restaurante/perfil-restaurante.component';
const routes: Routes = [
  
  {path:'home', component: HomeComponent},
  {path:'autenticacao', component:AutenticacaoComponent},
  {path:'registo', component:RegistoComponent},
  {path: 'perfilrestaurante', component:PerfilRestauranteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const exportacoes=[HomeComponent,AutenticacaoComponent,RegistoComponent,PerfilRestauranteComponent]
