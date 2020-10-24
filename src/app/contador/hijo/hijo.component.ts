import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
@Input() contador:number;

@Output() cambioContador = new EventEmitter<number>();

  constructor(private store:Store) { }

  multiplicar(){
    //this.contador *=2;
   // this.cambioContador.emit(this.contador)


  }
  dividir(){
   // this.contador /=2;
   // this.cambioContador.emit(this.contador)
    
  }
  ngOnInit(): void {
  }

}
