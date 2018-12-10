import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-mng',
  templateUrl: './group-mng.page.html',
  styleUrls: ['./group-mng.page.scss'],
})
export class GroupMNGPage implements OnInit {
  users : any
  hasGroup : boolean
  constructor() {
    this.users = [
      {title: 'User 1'},
      {title: 'User 2'},
      {title: 'User 3'},
      {title: 'User 4'},
      {title: 'User 5'}
    ]
  }

  ngOnInit() {
     this.hasGroup = true;
     console.log(this.users.length);
  }

  removeUser(item){
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i] == item){
        this.users.splice(i, 1);
      }
    }
    console.log(this.users.length);
  }

}
