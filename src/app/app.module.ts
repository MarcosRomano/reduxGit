import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//STORE DECLARADO
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { countadorReducer } from './contador/contador.reducer';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    //STORE IMPORTADO       CAMBIAMOS EL NOMBRE 
    StoreModule.forRoot({ contador: countadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
