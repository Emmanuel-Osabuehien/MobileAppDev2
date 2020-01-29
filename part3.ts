import {toDoInterface} from'./interface';

class toDo implements toDoInterface {

myTaskArray: Array<string> = [];


addTask(task: string): number {
    this.myTaskArray.push(task);
    console.log("Item "  + task + " has been added to the array");
    return this.myTaskArray.length;

}

}

let myTaskArray:Array<string> = [];

function addTask(task:string):number{
    myTaskArray.push(task);
    console.log("item " + task + " has been added to the array");
    return myTaskArray.length;
}

function listAllTasks():void{

   // for(let i = 0; i < myTaskArray.length; i++) {
   // }
   console.log("List of items in the array is ");
   myTaskArray.forEach(function(item) {
       console.log(item);
   });
   
}

function deleteTask(task: string):number{
    let index:number;
    index = myTaskArray.indexOf(task);
    if (index > -1) {
        myTaskArray.splice(index, 1);
        console.log("Item " + task + " has been deleted from array");
    }
    else {
        console.log("Item " + task + " is not in the array");
    }
    return myTaskArray.length;
}

addTask("Complete Part A");
let itemsInArray:number = addTask("Complete Part A");
console.log("Number of items in array is " + itemsInArray);
listAllTasks();
let count:number = deleteTask("Complete Part A");
console.log("Number of items in the array is " + count);

let todo1 new toDo();
todo1.addTask("Part A");
