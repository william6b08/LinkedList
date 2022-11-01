class NodeCreation{
  constructor(value=null, nextNode=null){
    this.value = value;
    this.nextNode = nextNode;
  }
  
}
class LinkedList{
  constructor(){
    this._head = null;
    this._size = 0;
  }
  append(value){ //add new node to the end of the linked list
    this._head = new NodeCreation(value, this._head);
    this._size++;
  }

  insertLast(value){
    let node = new NodeCreation(value);
    let current;
    // if the node list is empty, make this node the head of the list
    if(!this._head){
      this._head = node;
    }
    else{
      current = this._head;
      while(current.nextNode){ // loop through the entire linkedList until the last one.
        current = current.nextNode
      }
      current.nextNode = node // after you have reach the last node, add this current node to it.
    }
    this._size++;
  }

  size(){
    return this._size;
  }

  insertAtIndex(value, index){
    let counter = index;
    let current = this._head;
    if(counter > this._size){return} // if index greater than size, the function will do nothing and return.
    if(counter == 0){ // if index is 0, that mean node should be placed in the beginning of the list.
      this.append(value, current);
      return;
    }
    while(counter >= 2){
      current = current.nextNode; // while loop will find the node in the index position.
      counter--;
    }
    let preceedingNode = current; // set that node as preceeding node
    let afterNode = preceedingNode.nextNode; //also set the nextNode of the preceeding node to be afterNode
    let node = new NodeCreation(value, afterNode); // creating a new node and set the afternode as nextnode
    preceedingNode.nextNode = node; // finally changing the nextNode of the preceeding node to be this new node, reconnecting the link.
    this._size++;
  }

  getAtIndex(index){
    if(index > this._size){return}
    let current = this._head;
    for(let x = 0; x < index; x++){
      current = current.nextNode;
    }
    return current.value;
  }

  removeAt(index){
    if(index == 0){
      this._head = this._head.nextNode;
      return;
    }
    if(index >= this._size){
      index = this._size;
      let current = this._head;
      for (let x = 1; x < index; x++){
        current = current.nextNode;
      }
      current.nextNode = null;
      return;
    }
    let current = this._head;
    for(let x = 1; x < index; x++){
      current = current.nextNode;
    }
    current.nextNode = current.nextNode.nextNode;
  }

  head(){
    return this._head.value;
  }

  tail(){
    let current = this._head;
    for (let x = 2; x < this._size; x++){
      current = current.nextNode
    }
    return current.value;
  }

  contain(value){
    let current = this._head;
    for(let x = 1; x <= this._size; x++){
      if(current.value === value){
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value){
    let current = this._head;
    for(let x = 0; x < this._size; x++){
      if(current.value === value){
        return x;
      }
      current = current.nextNode;
    }
    return null;
  }

  toString(){
    let current = this._head;
    let message = '';
    while(current){
      message += `(${current.value})->`;
      current = current.nextNode;
    }
    console.log(message + "(null)")
  }
  
}

const ll1 = new LinkedList()
ll1.append(5000)
// this.head = {value:5000, nextNode:null} printData =  [5000]
ll1.append(1000)
// this.head = {value: 1000, nextNode: {value: 5000, NextNode: null}} printData =  [1000]-[400]-[]-[]
ll1.append(500)
ll1.append(4000)
ll1.append(500000)
ll1.insertAtIndex(4444,2)
ll1.insertAtIndex(22222,0)
//this.head = {value: 500, nextNode: {value: 1000, nextNode: {value: 5000, nextNode: null}}} = [500]-[1000]-[5000]

ll1.toString()
console.log('-----------')
let ll2 = new LinkedList()
console.log('-----------')
ll2.append(100)
ll2.append(200)
ll2.append(300)
ll2.append(400)
ll2.append(500)
ll2.append(600)
ll2.toString()
console.log('------')
ll2.toString()



//[1000]-[200]-[400]-[500]

//insert(4000, 2)

// while loop()
  //counter = 2
  //1000
  // counter = 1
  //200
  //counter = 0
  //400

  //======================




