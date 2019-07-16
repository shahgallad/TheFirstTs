export class CardService{
    oneCard: any
    cards = [
        {name: "asdas"}
    ]
    counter = this.cards.length

    updList(){
        this.counter++
        this.oneCard = {
            name: `Card${this.counter}`
    }
        this.cards.unshift(this.oneCard)
    }
}