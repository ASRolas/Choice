import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

      imagem=`<img src="assets/comida1.jpg" style="height:100px; width:200px">`
      constructor() { }
     

      ngOnInit(): void {
      }

      cor(){

      
        $(".lateral").css("background","white");

      }

      pairar(){

        $("#bl1").mouseover(function(){
          $(".direita").css("background","white");
          $("#bl1").css("background","rgb(156, 26, 17)"); 
          $("#bl1").css("color","white");
        });
        $("#bl1").mouseout(function(){
          $("#bl1").css("background","rgb(238, 228, 228)"); 
          $("#bl1").css("color","gray");
        });

        $("#bl2").mouseover(function(){
          $("#bl2").css("background","rgb(156, 26, 17)"); 
          $("#bl2").css("color","white");
        });
        $("#bl2").mouseout(function(){
          $("#bl2").css("background","rgb(238, 228, 228)"); 
          $("#bl2").css("color","gray");
        });

        //--------------------------
        $("#bl3").mouseover(function(){
          $("#bl3").css("background","rgb(156, 26, 17)"); 
          $("#bl3").css("color","white");
        });
        $("#bl3").mouseout(function(){
          $("#bl3").css("background","rgb(238, 228, 228)"); 
          $("#bl3").css("color","gray");
        });

        //--------------------------
        $("#bl4").mouseover(function(){
          $("#bl4").css("background","rgb(156, 26, 17)"); 
          $("#bl4").css("color","white");
        });
        $("#bl4").mouseout(function(){
          $("#bl4").css("background","rgb(238, 228, 228)"); 
          $("#bl4").css("color","gray");
        });

        //--------------------------
        $("#bl5").mouseover(function(){
          
          //$(".direita").css("background","rgb(148, 17, 17)");
          $("#bl5").css("background","rgb(156, 26, 17)"); 
          $("#bl5").css("color","white");
        });
        $("#bl5").mouseout(function(){
          $("#bl5").css("background","rgb(238, 228, 228)"); 
          $("#bl5").css("color","gray");
        });

        
        //--------------------------efeito da marca d'agua----------------------------------
        $("#watermark").mouseover(function(){
          
          $("#watermark").css("color","rgb(207, 209, 194)");
        });
        $("#watermark").mouseout(function(){
        
          $("#watermark").css("color","rgb(243, 234, 234)");
        });

        //--------------------------efeito do botao de itens salvos--------------------------------
        
        $("#salvos").mouseover(function(){
          
          $("#salvos").css("color","rgb(55, 83, 184)");
        });
        $("#salvos").mouseout(function(){
        
          $("#salvos").css("color","rgb(150, 7, 7)");
        });

        

      }

      mostrarPratosAcessiveis(){
        
        $("#bl5").mouseover(function(){
          $(".pratos_nacionais").hide();
          $(".lugares").hide();
          $(".pratos_acessiveis").fadeIn("slow");
        });

        $("#bl5").mouseout(function(){
          $(".pratos_acessiveis").hide();
        });

        
      }

      mostrarPratosNacionais(){
        
        $("#bl1").mouseover(function(){
          $(".lugares").hide();
          $(".pratos_acessiveis").hide();
          $(".pratos_nacionais").fadeIn("slow");
        });

        $("#bl1").mouseout(function(){
          $(".pratos_nacionais").hide();
        });

      }

      mostrarLugares(){
        
        $("#bl2").mouseover(function(){

          $(".pratos_acessiveis").hide();
          $(".pratos_nacionais").hide();
          $(".lugares").fadeIn("slow");
        });

        $("#bl2").mouseout(function(){
          $(".lugares").hide();
        });

      }
    
      slide1(){

        let contador=6;

          function delay(ms: number) {
            return new Promise( resolve => setTimeout(resolve, ms) );
          }

          $("#1").fadeIn("slow");
          delay(3000)
          $("#1").fadeOut("slow");
          delay(6000)
          $("#2").fadeIn("slow")
          delay(3000)
          $("#2").fadeOut("slow");
          delay(3000)
          $("#3").fadeIn("slow")
          delay(3000)
          $("#3").fadeOut("slow");
          delay(3000)
          
      }
      

  

}
