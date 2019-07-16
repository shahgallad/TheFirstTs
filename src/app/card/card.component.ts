import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  userAvatar = [
    {path: "https://sun1-29.userapi.com/c834201/v834201787/92aca/WypMIh3BlOU.jpg?ava=1"},
    {path: "https://sun1-83.userapi.com/c849336/v849336930/17aed7/etnhWNBu6z4.jpg?ava=1"},
    {path: "https://pp.userapi.com/c831209/v831209572/e138c/Vaihn_t7CiI.jpg?ava=1"},
    {path: "https://sun1-22.userapi.com/c845217/v845217457/1c2fd8/RZ1yxOQ58T8.jpg?ava=1"},
    {path: "https://sun1-23.userapi.com/c844720/v844720246/1ff6f7/gzX7zLFqEeg.jpg?ava=1"},
    {path: "https://sun1-29.userapi.com/c845016/v845016414/1ab293/Z-FTsPsDbzY.jpg?ava=1"},
    {path: "https://sun1-89.userapi.com/c850032/v850032488/ab3a6/YeTTN4rD66o.jpg?ava=1"},
    {path: "https://pp.userapi.com/c604829/v604829392/c764/P3VVKi7hTGU.jpg?ava=1"},
    {path: "https://pp.userapi.com/c850732/v850732884/140f05/6TD4FxjVZBg.jpg?ava=1"},
    {path: "https://pp.userapi.com/c845324/v845324384/ae386/rvvmFSBHVq8.jpg?ava=1"},
    {path: "https://pp.userapi.com/c849136/v849136380/6dd89/PMe4ZnntgqA.jpg?ava=1"}    
  ]
  creatorPath = this.userAvatar[Math.floor(Math.random() * this.userAvatar.length)]
  randomPath = []
  randomPath2 = []


  @Input() card;
   
  constructor() { 
    for (var i=0; i<3; i++){
      this.randomPath.push(this.userAvatar[Math.floor(Math.random() * this.userAvatar.length)])
    }
    for (var i=0; i<5; i++){
      this.randomPath2.push(this.userAvatar[Math.floor(Math.random() * this.userAvatar.length)])
    }
  }

  ngOnInit() {
  }

}
