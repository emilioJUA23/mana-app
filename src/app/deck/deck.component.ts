import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import {DECKS} from '../mock-decks';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  decks=DECKS;
  selectedDeck: Deck;
  
  onSelect(deck: Deck): void {
    this.selectedDeck = deck;
  }

  constructor() { }

  ngOnInit() {
  }

}
