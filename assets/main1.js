$(document).ready(function (){
  // V A R I A B I L I //
  var list = $(".list-chat");
  var newMessage = $(".new-message");
  var chatContainer = $(".main-right");
  var sendButton =$(".footer-right .send-section .mic");

  // S E N D  B Y  B U T T O N //
  sendButton.click(function(){
    var text = newMessage.val().trim();
    addMessage();
  })

  // S E N D  B Y  K E Y  F U N C T I O N //

  newMessage().keyup(function(e){
    if(e.which==13){
      var text = newMessage.val().trim();
      addMessage();
    }
  })


  // F U N C T I O N S //

  function addMessage(){

    if(text!== ""){
      var elementNew = $(".template .send ").clone();
      elementNew.children(".mex-text.bg-green").prepend(text);
      list.append(elementNew);
      chatContainer.scrollTop(chatContainer.prop('scrollHeight'));
    }
    newMessage.val("");
  }











})
