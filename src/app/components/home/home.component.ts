import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cor(){

  
    $(".lateral").css("background","white");

  }

  pairar(){
    

    $("#bl1").mouseover(function(){
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
    $("#watermark").mouseover(function(){
      
      $("#watermark").css("color","rgb(207, 209, 194)");
    });
    $("#watermark").mouseout(function(){
     
      $("#watermark").css("color","rgb(243, 234, 234)");
    });

    //--------------------------
    
    

  }
  
;
  

}
