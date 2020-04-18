$(document).ready(function () {










var list = $(".list-chat");
var newMessage = $(".new-message")



//aggiunta nuovo list items
newMessage.keyup(function(e){

  if(e.which == 13){
    var text = newMessage.val().trim();

    if(text !== ""){
      var elementNew = $(".template .send").clone();
      elementNew.add(text);
      list.append(elementNew);
    }
    newMessage.val("");
  }
});

//rimozione item

// $("body").on("click" , ".todo li i" , function(){
//   $(this).parent().remove();
// })
//
// //item completato
// $("body").on("click" , ".todo li" , function(){
//   $(this).toggleClass('done');
//   v.addClass("fas fa-trash");
//
// })

});
