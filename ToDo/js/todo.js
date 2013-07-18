$(function(){
  $(".add").on("click", function(e){
    e.preventDefault();
    var todo = $(".new-todo").val();
    var todoItem = "<li><div>" + todo + "</div><span><i class='icon-check-empty check'></i></span></li>";
    $(".todo-list").append(todoItem);
  });

  $(".todo-list").on("click", ".check-box", function(e){
    var that = this;
    $(that).toggleClass(function(){
      if($(that).hasClass("icon-check-empty"))
        return "icon-check";
      else
        return "icon-check-empty";
    })
  });

});