import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { ToDoItem, ToDoList } from '../classes/item.class';
import { ListItemModal } from '../pages/list/list.item.modal';
import {AmplifyService} from 'aws-amplify-angular'

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {
  data: any;
  user: any;
  myName: any;
  modal: any;
  signedIn: boolean;
  amplifyService: AmplifyService;
  itemList: ToDoList|any;

  constructor(
    public modalController: ModalController,
    amplify: AmplifyService,
    events: Events
  ) {
    this.amplifyService = amplify;
    // Listen for changes to the AuthState in order to change item list appropriately
    events.subscribe('data:AuthState', async (data) => {
      if (data.loggedIn){
        this.user = await this.amplifyService.auth().currentUserInfo();
      } else {
        this.user = null;
      }
    })
  }

  async ngOnInit() {
     console.log("init");
     this.user = await this.amplifyService.auth().currentUserInfo();
  }

  createGroup(){
    console.log("create group pressed!");
    this.itemList = new ToDoList({userId: this.user.id, items: [], assignees:[this.myName]
                                  , owner: this.user.id, myName: this.myName});
    this.save(this.itemList);
  }

  save(list){
    // Use AWS Amplify to save the list...
    this.amplifyService.api().post('apia46a8997', '/items', {body: list}).then((i) => {
      // ... and to get the list after you save it.
      this.getItems()
    })
    .catch((err) => {
      console.log(`Error saving list: ${err}`)
    })
  }

  getItems(){
    if (this.user){
      // Use AWS Amplify to get the list
      length = 0;
      this.amplifyService.api().get('apia46a8997', `/items/${this.user.id}`, {}).then((res) => {
        if (res && res.length > 0){
          this.itemList = res[0];
          length = res.length;
          console.log(res[0]);
        } else {
          //this.itemList = new ToDoList({userId: this.user.id, items: [], groupId: "1234"});
          console.log("user does not have item in DB");
        }
      })
      .catch((err) => {
        console.log(`Error getting list: ${err}`)
      })
    } else {
      console.log('Cannot get items: no active user')
    }
  }
  
}
