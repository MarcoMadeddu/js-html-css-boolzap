$(document).ready(function (){
  // V A R I A B I L I //

  // S E N D - R E P L Y - B U T T O N //
  var list = $(".list-chat");
  var newMessage = $(".new-message");
  var chatContainer = $(".main-right");
  var sendButton =$(".footer-right .send-section .mic i");

  // S E A R C H //
  var searchIn = $(".contact-search");
  var chatContainer=$(".chats");


// S E A R CH  B Y  I N P U T//
  searchIn.keyup(function(a){

    chatContainer.hide();

    var keySearch= $(this).val().toLowerCase();
    $(".chats-text span:first-child").each(function(){
      if($(this ,".chats-text span:first-child").text().toLowerCase().includes(keySearch)){
        $(this).parents().show();
      }
    })

  });

  // S E N D  B Y  B U T T O N //
  sendButton.click(function(){
    addMessage();
    setTimeout(x,3000);
    function x(){
      replyMessage();
    }
    console.log(search);
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

      setTimeout(x,3000);
      function x(){
        replyMessage();
      }
    }
  });












  // F U N C T I O N S //


// C R E A T E  N E W  M E S S A G E //

  function addMessage(){
    var text = newMessage.val().trim();
    if(text!== "")
      var elementNew = $(".template .send ").clone();
      elementNew.children(".mex-text.bg-green").prepend(text);
      list.append(elementNew);
      chatContainer.scrollTop(chatContainer.prop('scrollHeight'));

    newMessage.val("");
  };


  function replyMessage(){
    var text = "ok";
      var elementNew = $(".template .rec ").clone();
      elementNew.children(".mex-text.bg-white").prepend(text);
      list.append(elementNew);
      chatContainer.scrollTop(chatContainer.prop('scrollHeight'));
  };
});
