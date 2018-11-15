import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { ToDoItem, ToDoList } from '../../classes/item.class';
import { ListItemModal } from './list.item.modal';
import {AmplifyService} from 'aws-amplify-angular'
@Component({
  selector: 'app-list-page',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  amplifyService: AmplifyService;
  modal: any;
  data: any;
  user: any;
  itemList: ToDoList|any;
  signedIn: boolean;

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
        this.getItems();
      } else {
        this.itemList = [];
        this.user = null;
      }
    })
  }

  async ngOnInit(){
    this.user = await this.amplifyService.auth().currentUserInfo();
    this.getItems();
  }

  async modify(item, i) {
    console.log("wawada");
    let props = {
      itemList: this.itemList,
      /*
        We pass in an item paramenter only when the user clicks on an existing item
        and therefore populate an editItem value so that our modal knows this is an edit operation.
      */
      editItem: item || undefined
    };

    // Create the modal
    this.modal = await this.modalController.create({
      component: ListItemModal,
      componentProps: props
    });

    // Listen for the modal to be closed...
    this.modal.onDidDismiss()
      .then(result => {
      if (result.data.newItem){
        console.log("wawawa");
        // ...and add a new item if modal passes back newItem
        result.data.itemList.items.push(result.data.newItem)
      } else if (result.data.editItem){
         console.log("hahaha");
        // ...or splice the items array if the modal passes back editItem
        result.data.itemList.items[i] = result.data.editItem;
      }
      this.save(result.data.itemList);
      console.log("end of did dismiss");
      });

    return this.modal.present();
  }


  delete(i){
    this.itemList.items.splice(i, 1);
    this.save(this.itemList);
  }

  complete(i){
    this.itemList.items[i].status = "complete";
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
      this.amplifyService.api().get('apia46a8997', `/items/${this.user.id}`, {}).then((res) => {
        if (res && res.length > 0){
          this.itemList = res[0];
        } else {
          this.itemList = new ToDoList({userId: this.user.id, items: []});
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
