export class CardService{
    oneCard: any
    cards = []
    users = [
        {path: "https://sun1-29.userapi.com/c834201/v834201787/92aca/WypMIh3BlOU.jpg?ava=1", name: "Name1"},
        {path: "https://sun1-83.userapi.com/c849336/v849336930/17aed7/etnhWNBu6z4.jpg?ava=1", name: "Name2"},
        {path: "https://pp.userapi.com/c831209/v831209572/e138c/Vaihn_t7CiI.jpg?ava=1", name: "Name3"},
        {path: "https://sun1-22.userapi.com/c845217/v845217457/1c2fd8/RZ1yxOQ58T8.jpg?ava=1", name: "Name4"},
        {path: "https://sun1-23.userapi.com/c844720/v844720246/1ff6f7/gzX7zLFqEeg.jpg?ava=1", name: "Name5"},
        {path: "https://sun1-29.userapi.com/c845016/v845016414/1ab293/Z-FTsPsDbzY.jpg?ava=1", name: "Name6"},
        {path: "https://sun1-89.userapi.com/c850032/v850032488/ab3a6/YeTTN4rD66o.jpg?ava=1", name: "Name7"},
        {path: "https://pp.userapi.com/c604829/v604829392/c764/P3VVKi7hTGU.jpg?ava=1", name: "Name8"},
        {path: "https://pp.userapi.com/c850732/v850732884/140f05/6TD4FxjVZBg.jpg?ava=1", name: "Name9"},
        {path: "https://pp.userapi.com/c845324/v845324384/ae386/rvvmFSBHVq8.jpg?ava=1", name: "Name10"},
        {path: "https://pp.userapi.com/c849136/v849136380/6dd89/PMe4ZnntgqA.jpg?ava=1", name: "Name11"}    
      ]
    titles = [
        "Card1", "Card2", "Card3", "Card4", "Card5", "Card6", "Card7", "Card8", "Card9", "Card10", "Card11", "Card12",
         "Card13", "Card14", 
    ]

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
            streamerImgPath.push(this.users[Math.floor(Math.random() * this.users.length)])
          }
        card.streamerImg = streamerImgPath
        card.cardTitle = this.titles[Math.floor(Math.random() * this.titles.length)]
        card.cardCreator = this.users[Math.floor(Math.random() * this.users.length)].name
        for (var i=0; i<5; i++){
            subscriberImgPath2.push(this.users[Math.floor(Math.random() * this.users.length)])
          }
        card.subscriberImg = subscriberImgPath2
        this.cards.unshift(card)
    }
}