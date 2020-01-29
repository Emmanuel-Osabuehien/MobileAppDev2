var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("item " + task + " has been added to the array");
    return myTaskArray.length;
}
function listAllTasks() {
    // for(let i = 0; i < myTaskArray.length; i++) {
    // }
    console.log("List of items in the array is ");
    myTaskArray.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var index;
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
var itemsInArray = addTask("Complete Part A");
console.log("Number of items in array is " + itemsInArray);
listAllTasks();
var count = deleteTask("Complete Part A");
console.log("Number of items in the array is " + count);
