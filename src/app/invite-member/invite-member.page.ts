import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { ToDoItem, ToDoList } from '../classes/item.class';
import { ListItemModal } from '../pages/list/list.item.modal';
import {AmplifyService} from 'aws-amplify-angular'

@Component({
  selector: 'app-invite-member',
  templateUrl: './invite-member.page.html',
  styleUrls: ['./invite-member.page.scss'],
})
export class InviteMemberPage implements OnInit {
  modal: any;
  data: any;
  user: any
  itemList: ToDoList|any;
  signedIn: boolean;
  amplifyService: AmplifyService;
  code: string;

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
     this.user = await this.amplifyService.auth().currentUserInfo();
     this.getItems();
     
  }

  getItems(){
    if (this.user){
      // Use AWS Amplify to get the list
      this.amplifyService.api().get('apia46a8997', `/items/${this.user.id}`, {}).then((res) => {
      if (res && res.length > 0){
          this.itemList = res[0];
          this.code = this.itemList.owner;
          this.code = this.code.substring(10);
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
