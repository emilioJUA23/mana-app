import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import {DECKS} from '../mock-decks';
import { DeckService } from '../deck.service';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  decks:Deck[] ;
  selectedDeck: Deck;

  onSelect(deck: Deck): void {
    this.selectedDeck = deck;
  }

  getDecks(): void
  {
      this.deckService.getDecks().subscribe(decks => this.decks = decks);
  }

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.getDecks();
  }

}
