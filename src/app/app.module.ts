import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeubleComponent } from './meuble/meuble.component';
import { MeublesListeComponent } from './meubles-liste/meubles-liste.component';
import { DatejourPipe } from './datejour.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MeubleComponent,
    MeublesListeComponent,
    DatejourPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
