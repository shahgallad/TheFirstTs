import { Component } from '@angular/core';
import { CardService } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardService]
})
export class AppComponent {

  cards = []
  constructor(private cardsService: CardService) {}

  ngOnInit() {
    this.cards = this.cardsService.cards
  }

  onClick(){
    console.log("NICE")
    this.cardsService.updList()
    console.log("OR NOT?!?!?!?!?!")
    
  }
}
