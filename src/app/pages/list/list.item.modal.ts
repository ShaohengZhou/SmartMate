import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToDoItem, ToDoList } from '../../classes/item.class';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'item-modal',
  templateUrl: 'list.item.modal.html',
})
export class ListItemModal implements OnInit {

  itemList: ToDoList;
  editItem: ToDoItem;
  user: string;
  item: ToDoItem;

  constructor(private modalController: ModalController, private alertCtrl: AlertController) {}

  ngOnInit(){
    /*
      If you pass in an 'editItem' property, then you create a copy to store changes to the existing item
      so that the original is not modified unless the user saves.
    */
    this.item = this.editItem ? Object.assign({}, this.editItem) : new ToDoItem({})
  }

  save() {
    this.modalController.dismiss({
      itemList: this.itemList,
      /*
        You pass back either a newItem or editItem value depending on whether an edit operation is taking place
        so that the list module can decide whether to insert into the items array or splice into it.
      */
      newItem: !this.editItem ? this.item : null,
      editItem: this.editItem ? this.item : null
    });
    console.log("saved");
  };

  cancel(){
    this.modalController.dismiss({itemList: this.itemList});
    console.log("canceled");
  }

  async showMissingAlert() {
    console.log("MissingAlert");
    let alert = await this.alertCtrl.create({
        header: 'Missing some information',
        message: 'You cannot create empty chore:)',
    })
    alert.present()
  }
}
