import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.page.html',
  styleUrls: ['./join-group.page.scss'],
})
export class JoinGroupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  joinGroup(){
    console.log("Joined group!");
  }
}
