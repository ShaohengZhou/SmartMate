import { v4 as uuid } from 'uuid';

export class ToDoList {
 userId: any;
 items: Array<ToDoItem>

 constructor(params){
   this.items = params.items || [];
   this.userId = params.userId;
 }
}

export class ToDoItem {
 id: string;
 title: string;
 description: string;
 status: any;
 date: string;

 constructor(params){
   this.id = uuid();
   this.title = params.title;
   this.description = params.description;
   this.status = 'new';
   this.date = new Date().toISOString().substr(0,10);
 }
}