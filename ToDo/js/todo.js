function Todo(){}

$.extend(Todo.prototype, {
  todoList: ".todo-list",
  newTodo: ".new-todo",

  getTodo: function(){
    return $(".new-todo").val();
  },

  createTodo: function(todo){
    var that = this;
    var todoElement = "<li class='todo-item clearfix'><i class='icon-check-empty check-box'></i><div class='todo-text'>" + todo + "</div></li>";
    $(that.todoList).append(todoElement);
  },

  checkTodo: function(checkbox) {
    var todoItem = checkbox.parentElement;
    $(todoItem).toggleClass("checked");
    this.toggleCheckbox(checkbox);
    
  },

  toggleCheckbox: function(checkbox) {
    if($(checkbox).hasClass("icon-check-empty")){
      $(checkbox).removeClass("icon-check-empty");
      $(checkbox).addClass("icon-check");
    }
    else {
      $(checkbox).removeClass("icon-check");
      $(checkbox).addClass("icon-check-empty");
    }
  },

  bindEvents: function(){
    var that = this;
    $(".new-todo").on("keypress", function(e){
      if(e.keyCode == 13){
        e.preventDefault();
        var newTodo = $(".new-todo").val();
        if (newTodo == ""){
          alert("Please add new todo")
        } else {
          that.createTodo($(".new-todo").val());
          $(".new-todo").val("");  
        }
      }
    });

    $(".todo-list").on("click", ".check-box", function(e){
        that.checkTodo(this);
      });  
    }
});


$(function(){
  var todo = new Todo();
  todo.bindEvents();  
  todo.createTodo("goto meeting");
});