import { Injectable } from '@angular/core';
import { Deck } from './deck';
import { DECKS } from './mock-decks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  getDecks(): Observable<Deck[]>
  {
    this.messageService.add('DeckService: fetched decks');
    return of(DECKS);
  }

  constructor(private messageService: MessageService) { }
}
