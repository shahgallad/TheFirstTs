import cardInfo from 'C:/Ang/theFirst/theFirstTs/src/assets/someInfo.json'


export class CardService{

    oneCard: any
    cards = []

    
    updList(){
        let card = {
            streamerImg: [],
            cardTitle: "",
            cardCreator: "",
            subscriberImg: []
        }
        let streamerImgPath = []
        let subscriberImgPath2 = []
        for (var i=0; i<3; i++){
            streamerImgPath.push(cardInfo.users[Math.floor(Math.random() * cardInfo.users.length)])
          }
        card.streamerImg = streamerImgPath
        card.cardTitle = cardInfo.titles[Math.floor(Math.random() * cardInfo.titles.length)]
        card.cardCreator = cardInfo.users[Math.floor(Math.random() * cardInfo.users.length)].name
        for (var i=0; i<5; i++){
            subscriberImgPath2.push(cardInfo.users[Math.floor(Math.random() * cardInfo.users.length)])
          }
        card.subscriberImg = subscriberImgPath2
        this.cards.unshift(card)
    }
}