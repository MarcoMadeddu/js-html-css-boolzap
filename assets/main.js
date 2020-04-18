$(document).ready(function () {


var list = $(".list-chat");
var newMessage = $(".new-message");
var chatContainer = $(".main-right");
var sendButton =$(".send-section .mic");


//Aggiunta messaggio con invio da tastiera
newMessage.keyup(function(e){

  if(e.which == 13){
    var text = newMessage.val().trim();
    addMessage();
};

//Aggiunta messaggio con click su bottone

// $("body").on("click" , ".send-section .mic" , function(){
//    console.log("click");
// });

sendButton.click(function(){
  alert("dioporco");
});



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
