import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { ToDoItem, ToDoList } from '../classes/item.class';
import { ListItemModal } from '../pages/list/list.item.modal';
import {AmplifyService} from 'aws-amplify-angular'


@Component({
  selector: 'app-group-mng',
  templateUrl: './group-mng.page.html',
  styleUrls: ['./group-mng.page.scss'],
})
export class GroupMNGPage implements OnInit {
  modal: any;
  data: any;
  user: any
  hasGroup : boolean
  signedIn: boolean;
  amplifyService: AmplifyService;
  itemList: ToDoList;
  groupItemList: ToDoList;

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
    this.hasGroup = true;
  }
  

  async ngOnInit() {
     console.log("init");
     this.user = await this.amplifyService.auth().currentUserInfo();
     this.getItems();
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
      this.amplifyService.api().get('apia46a8997', `/items/${this.user.id}`, {}).then((res) => {
        if (res && res.length > 0){
          this.itemList = res[0];
          this.hasGroup = true;
          this.getGroupItems();
          console.log(res[0]);
        } else {
          this.hasGroup = false;
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

  getGroupItems(){
    if (this.user){
      // Use AWS Amplify to get the list
      this.amplifyService.api().get('apia46a8997', `/items/${this.itemList.owner}`, {}).then((res) => {
        if (res && res.length > 0){
          this.groupItemList = res[0];
        } else {
          //this.itemList = new ToDoList({userId: this.user.id, items: [], groupId: "1234"});
          console.log("user does not have item in DB");
          return 0;
        }
      }).catch((err) => {
        console.log(`Error getting list: ${err}`)
      })
    } else {
      console.log('Cannot get items: no active user')
      return -1;
    }
  }
}
