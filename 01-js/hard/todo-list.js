/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

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
    // console.log(totodo);
    if (totodo == undefined){
      return null;
    }
    return totodo;
  }

  update(index ,updatedTodo){
    if (index > this.todolist.length -1){
      return null;
    }
    this.todolist[index] = updatedTodo;
  }

  getAll(){
    return this.todolist;
  }

  clear(){
    let len = this.todolist.length;
    this.todolist.splice(0,len);
  }


}





module.exports = Todo;
