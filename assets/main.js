$(document).ready(function (){
  // V A R I A B I L I //
  var list = $(".list-chat");
  var newMessage = $(".new-message");
  var chatContainer = $(".main-right");
  var sendButton =$(".footer-right .send-section .mic i");

  // S E N D  B Y  B U T T O N //
  sendButton.click(function(){
    addMessage();
  });

  // C H A N G E  S E N D  I C O N //
  newMessage.focusin(function(){
    sendButton.removeClass("fas fa-microphone");
    sendButton.addClass("fas fa-paper-plane");
  });
  newMessage.focusout(function(){
    sendButton.removeClass("fas fa-paper-plane");
    sendButton.addClass("fas fa-microphone");
  });

  // S E N D  B Y  K E Y  F U N C T I O N //

  newMessage.keyup(function(e){
    if(e.which==13){
      addMessage();
    }
  });


  // F U N C T I O N S //


// C R E A T E  N E W  M E S S A G E
  function addMessage(){
      var text = newMessage.val().trim();
    if(text!== ""){
      var elementNew = $(".template .send ").clone();
      elementNew.children(".mex-text.bg-green").prepend(text);
      list.append(elementNew);
      chatContainer.scrollTop(chatContainer.prop('scrollHeight'));
    }
    newMessage.val("");
  };
});
