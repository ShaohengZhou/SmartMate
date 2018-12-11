import { v4 as uuid } from 'uuid';

export class ToDoList {
 userId: any;
 items: Array<ToDoItem>;
 owner: string;
 assignees: Array<string>;
 myName: string;

 constructor(params){
   this.items = params.items || [];
   this.userId = params.userId;
   this.assignees = params.assignees || [];
   this.myName = params.myName;
   this.owner = params.owner;
  }
}

export class ToDoItem {
 id: string;
 title: string;
 description: string;
 status: any;
 date: string;
 assignee: string;


 constructor(params){
   this.id = uuid();
   this.title = params.title;
   this.description = params.description;
   this.status = 'new';
   this.date = params.date;
   this.assignee = params.assignee;
 }
}