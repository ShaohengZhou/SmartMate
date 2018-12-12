import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { ToDoItem, ToDoList } from '../../classes/item.class';
import { ListItemModal } from '../list/list.item.modal';
import { AmplifyService } from 'aws-amplify-angular';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'newHome-page',
    templateUrl: 'newHome.page.html',
    styleUrls: ['newHome.page.scss']

})

export class NewHomePage implements OnInit {
    amplifyService: AmplifyService;
    modal: any;
    data: any;
    user: any;
    itemList: ToDoList|any;
    signedIn: boolean;
    groupItemList : ToDoList|any;

    constructor(
      public modalController: ModalController,
      amplify: AmplifyService,
      events: Events,
      private alertCtrl: AlertController
  
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
        itemList: this.groupItemList,
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

    async showConfirmAlert(i) {
      console.log("check");
      let alert = await this.alertCtrl.create({
          header: 'Are you sure?',
          message: 'Once a task is deleted, it cannot be recovered',
          buttons: [
              {
                  text: 'No',
                  role: 'cancel',
                  handler: () => {
                      console.log('Cancel clicked');
                  }
              },
              {
                  text: 'Yes',
                  handler: () => {
                     this.groupItemList.items.splice(i,1);
                     this.save(this.groupItemList);
                  }
              }
          ]
      })
      alert.present()
    }
  
    complete(i){
      if (this.groupItemList.items[i].status == "new") {
        this.groupItemList.items[i].status = "complete";
        this.save(this.groupItemList);
      } else {
        this.groupItemList.items[i].status = "new";
        this.save(this.groupItemList);
      }
      
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
            this.getGroupItems();
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

    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      this.ngOnInit();
      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.target.complete();
      }, 1000);
    }
  
  }