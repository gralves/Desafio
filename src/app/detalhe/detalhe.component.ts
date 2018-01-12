import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

   imgPrincipal : string;
  @Input() item;

  constructor() { }

  ngOnInit() {

    this.imgPrincipal = this.item.img;
  }

  clickImg(img){
    if(img == 1){
      this.imgPrincipal = this.item.img;
    }
    else{
      this.imgPrincipal = this.item.img2;
    }

  }

}
