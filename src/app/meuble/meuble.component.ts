import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-meuble',
  templateUrl: './meuble.component.html',
  styleUrls: ['./meuble.component.css']
})
export class MeubleComponent implements OnInit {
  @Input()lib:string;
  @Input()image:string;
  @Input()prix:number;
  @Input()etat:boolean;
  constructor() { }

  ngOnInit() {
  }

}
