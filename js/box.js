function launchIntoFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}


var sequence = function() {
  return [{
      e: $(".breathe-in"),
      p: "transition.fadeIn",
      o: {
        duration: 2000
      }
    },
    {
      e: $(".breathe-in"),
      p: "transition.fadeOut",
      o: {
        duration: 1000
      }
    },
    {
      e: $(".hold"),
      p: "transition.fadeIn",
      o: {
        duration: 2000
      }
    },
    {
      e: $(".hold"),
      p: "transition.fadeOut",
      o: {
        duration: 3000
      }
    },
    {
      e: $(".breathe-out"),
      p: "transition.fadeIn",
      o: {
        duration: 2000
      }
    },
    {
      e: $(".breathe-out"),
      p: "transition.fadeOut",
      o: {
        duration: 2000
      }
    },
    {
      e: $(".hold"),
      p: "transition.fadeIn",
      o: {
        duration: 2000
      }
    },
    {
      e: $(".hold"),
      p: "transition.fadeOut",
      o: {
        duration: 2000
      }
    }
  ];
};
$(document).ready(function() {

  var seconds = 00;
  var mins = 00;

  function countUp(){
    ++seconds;
    $(".seconds").html(format(seconds % 60));
    $(".minutes").html(format(parseInt(seconds/60)));
    
  }
  
  function format(secs){
    return ("0" + secs).slice(-2);
  }


  $(".play").on("click", function() {
    $(".play").remove();
    setInterval(countUp, 1000);
    $.Velocity.RunSequence(sequence());

    launchIntoFullscreen(document.getElementById("doc"));
    $(".inner")
      .velocity({
        width: "98%",
        height: "98%"
      }, {
        duration: 4000
      })
      .velocity("reverse", {
        delay: 4000,
        loop: 4
      });
  });

  exitFullscreen();

});
