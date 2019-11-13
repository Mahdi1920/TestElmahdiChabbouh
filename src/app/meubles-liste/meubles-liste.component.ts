import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meubles-liste',
  templateUrl: './meubles-liste.component.html',
  styleUrls: ['./meubles-liste.component.css']
})
export class MeublesListeComponent implements OnInit {
datejour=new Date(2019,10,13);
meubles=[
  {libelle:'table' , img:'../assets/table.jpg' , prixTTC:47, neuf:true},
  {libelle:'armoire' , img:'../assets/armoire.jpg' , prixTTC:258.5 , neuf:false},
  {libelle:'fauteil' , img:'../assets/fauteuil.jpg' , prixTTC:113.8 , neuf:true}
];
  constructor() { }

  ngOnInit() {
  }

}
