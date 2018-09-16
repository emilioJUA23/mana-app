import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { FormsModule } from '@angular/forms';
import { DeckDetailComponent } from './deck-detail/deck-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    DeckDetailComponent,
    MessagesComponent
  ],
  imports: [
  BrowserModule,
  FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
