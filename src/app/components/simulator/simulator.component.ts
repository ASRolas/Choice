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

<ul class="linksr">
  <li><a href="#">amei</a></li>
  <li><a href="3">gostei</a></li>
  <li><a href="#">nao gostei</a></li>
  <li><a href="#">comentar</a></li>
  <li><a href="#">visite-nos</a></li>
</ul>
</div>`

