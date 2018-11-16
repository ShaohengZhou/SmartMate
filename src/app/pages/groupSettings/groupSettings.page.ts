import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { ToDoItem, ToDoList } from '../../classes/item.class';
import { ListItemModal } from '../list/list.item.modal';
import {AmplifyService} from 'aws-amplify-angular'
@Component({
    selector: 'newHome-page',
    templateUrl: 'groupSettings.page.html',
    styleUrls: ['groupSettings.page.scss']

})





export class GroupSettings {}