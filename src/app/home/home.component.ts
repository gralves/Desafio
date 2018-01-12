import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { DetalheComponent } from '../detalhe/detalhe.component';
import { Pipe } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navItems;
  navItemsGerais;
  endpoint ='/assets/mock.json';
  titulo = "Todos os Produtos";
   filtro = '';
   item;
   isDetalhe = false;
   orderSelect = '';
  constructor(private http:  HttpClient) {
    
  }

 

  ngOnInit() {
    this.getItens();
    this.navItems = this.navItemsGerais;
   
  }

getDetalhe(item){
  this.item = item;
  console.log(item);
  this.isDetalhe = true;
}

getItens(){
   this.http.get(this.endpoint).subscribe(data => {
    this.navItemsGerais = data;
    this.navItems = data;
    this.isDetalhe = false;
  });
}

getTodos(){
  this.isDetalhe = false;
   this.navItems =  this.navItemsGerais;;
   this.titulo = "Todos os Produtos";
 }

getBrasileiras(){
  this.isDetalhe = false;
  this.navItems =  this.navItemsGerais.filter(item => item.tipo == 2);
  this.titulo = "Literatura Brasileira";
}

getEstrangeiras(){
  this.isDetalhe = false;
   this.navItems = this.navItemsGerais.filter( item => item.tipo == 1);
   this.titulo = "Literatura Estrangeira";
 }

 getFilter(){
  this.isDetalhe = false;
  this.navItems = this.navItems.filter(item => item.descricao.toLowerCase().indexOf(this.filtro.toLowerCase()) !== -1);
 }

 onChange(newValue){
   if(newValue == 1){
  this.navItems.sort(function(a, b){
    var nameA=a.descricao.toLowerCase(), nameB=b.descricao.toLowerCase()
    if (nameA < nameB) 
        return -1 
    if (nameA > nameB)
        return 1
    return 0 
    })
  }
  else{

    this.navItems.sort(function(a, b){
      var nameA=a.descricao.toLowerCase(), nameB=b.descricao.toLowerCase()
      if (nameA < nameB) 
          return 1 
      if (nameA > nameB)
          return -1
      return 0 
      })

  }
 }

}
