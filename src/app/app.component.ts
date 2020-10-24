import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementar, decrementar } from './contador/contador.action';

interface appStore {
  contador:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Redux';
  contador:number;

  constructor( private store:Store<appStore>){
    this.store.select('contador') .subscribe(contador=> this.contador=contador);
    
    
  }
  incrementador(){
    this.store.dispatch(incrementar());
    
  }  
  decrementador(){
    this.store.dispatch(decrementar());

  }

}
