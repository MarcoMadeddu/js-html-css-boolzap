$(document).ready(function () {


var list = $(".list-chat");
var newMessage = $(".new-message");
var chatContainer = $(".main-right");
var sendButton =$("")


//aggiunta nuovo list items
newMessage.keyup(function(e){

  if(e.which == 13){
    var text = newMessage.val().trim();
    addMessage();
};


function addMessage(){
  if(text !== ""){
    var elementNew = $(".template .send ").clone();
    elementNew.children(".mex-text.bg-green").prepend(text);
    list.append(elementNew);
    chatContainer.scrollTop(chatContainer.prop('scrollHeight'));
  }
  newMessage.val("");
}
});

});
