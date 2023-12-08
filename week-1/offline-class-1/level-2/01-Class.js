
// class Animal {
//   constructor(name, legCount) {
//     this.name = name
//     this.legCount = legCount
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`
//   }
// }

// let cat  = new Animal("cat","2");

// console.log(cat.describe());


class Todo {
  constructor(){
    this.todolist =[];
  }

  add(todo){
    this.todolist.push(todo);
  }

  remove(indexOfTodo){
    this.todolist.splice(indexOfTodo,1);
  }

  get(indexOfTodo){
    let totodo = this.todolist[indexOfTodo];
    console.log(totodo);
  }

  update(index ,updatedTodo){
    this.todolist[index] = updatedTodo;
  }

  getAll(){
    this.todolist.forEach(function(item){
      console.log(item);
    })
  }

  clear(){
    let len = this.todolist.length;
    this.todolist.splice(0,len)
    }
  }


let coding = new Todo();

coding.add("solve medium problems");
coding.add("get help from ruchika for palindrome");
coding.getAll();
coding.get(0);
coding.clear();
coding.getAll();