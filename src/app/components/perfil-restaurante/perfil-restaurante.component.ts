import { Component, OnInit } from '@angular/core';
import { novaPublicacao } from '../simulator/simulator.component';

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

  addPub(){
    
    $(".publicacao").css("z-idex","40");
    $(".posts").css("z-idex","10");
    $(".publicacao").fadeOut("fast");
    $(".meio").append(novaPublicacao);
  }
  upload(){ //é o filechooser

    $("#myfile").click();
    
    
  }


}
