import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }

  

}




export const novaPublicacao=`<div class="posts" style="background: rgb(150, 7, 7); margin-bottom: 80px; padding-top: 10px; z-index:10;">
<div class="perfilinho"  style="width: 45px; height: 45px;  border-radius: 50%;" ></div>
<h2 style=" height: 20px; margin-top: 0; width: 100px; margin-left: 0; text-indent: 20%;  color: white; margin-bottom: 0;">KFC</h2>   

<Img src="assets/imagens/costela.jpg" style=" height:70%; width: 100%;object-fit: cover; margin-top: 10px;">

<ul class="linksr" style="background: rgb(150, 7, 7); color:rgb(136, 76, 76); " >
             <!--  botoes de like e comentarios-->
            <i class="far fa-heart" style="position: absolute; font-size: x-large; left: 45px; top: -34px; color: rgb(171, 182, 190) ;"  ><small style="font-size: x-large; margin-left: 10px; margin-bottom: 20px; color: rgb(171, 182, 190);">Amei</small> </i>           
            <i class="far fa-comment-alt" style="position: absolute; font-size: x-large; left: 285px; top: -34px; color: rgb(171, 182, 190) ;"  ><small style="font-size: x-large; margin-left: 10px; margin-bottom: 20px; color: rgb(171, 182, 190);">Comentar</small> </i>            
            <i class="far fa-bookmark" style="position: absolute; font-size: x-large; left: 530px; top: -34px; color: rgb(171, 182, 190) ;"  ><small style="font-size: x-large; margin-left: 10px; margin-bottom: 20px; color: rgb(171, 182, 190);">Salvar</small> </i>
          </ul>
</div>`

