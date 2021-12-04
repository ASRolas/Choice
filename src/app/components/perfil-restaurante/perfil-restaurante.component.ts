import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-restaurante',
  templateUrl: './perfil-restaurante.component.html',
  styleUrls: ['./perfil-restaurante.component.css']
})
export class PerfilRestauranteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirPub(){
    
    $(".publicacao").fadeIn("quick");

  }
  fecharPub(){
    
    $(".publicacao").fadeOut("quick");

  }
  upload(){

    $("#myfile").click();
    
    
  }


}
