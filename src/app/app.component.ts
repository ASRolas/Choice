import { Component } from '@angular/core';
import bd from './_files/bd.json' 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Choice';
  lista_restaurantes:{ nome: string, localizacao: string}[]= bd;
}


