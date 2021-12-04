import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
