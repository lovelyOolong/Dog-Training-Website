//global variable to resume the background video
var paused_video = null;

//animated data in section 1 reference http://animejs.com/documentation/#domAttributes
function playStats() {
  var obj = {
    "numberA" : 0,
    "numberB" : 0,
    "numberC" : 0,
    "numberD" : 0
  }
  var domAttributes = anime({
  targets: obj,
  numberA: 33,
  numberB: 16,
  numberC: 10,
  numberD: 96,
  round: 1,
  easing: 'linear',
  update: function() {
    var el = document.querySelector('#stats1');
    el.innerHTML = obj["numberA"]/10;
    el = document.querySelector('#stats2');
    el.innerHTML = obj["numberB"]/10;
    el = document.querySelector('#stats3');
    el.innerHTML = obj["numberC"]/10;
    el = document.querySelector('#stats4');
    el.innerHTML = obj["numberD"];
  }
});
}

//pop-up div 
function loadInfoContainer() {
  var infoContainer = document.getElementById("info-container");
  infoContainer.style.visibility = "visible";
  infoContainer.style.zIndex = 99;
  var infoContainerInner = document.getElementById("info-container-inner");
  infoContainerInner.style.visibility = "visible";
  infoContainerInner.style.zIndex = 100;
  fullpage_api.setAllowScrolling(false);
}

function closeInfoContainer() {
  var infoContainer = document.getElementById("info-container");
  infoContainer.style.visibility = "hidden";
  infoContainer.style.zIndex = -1;
  var infoContainerInner = document.getElementById("info-container-inner");
  infoContainerInner.style.visibility = "hidden";
  infoContainerInner.style.zIndex = -1;
  fullpage_api.setAllowScrolling(true);
  var bg_video = document.getElementById(paused_video);
  bg_video.play();
  paused_video = "";
  var info_content_divs = document.getElementsByClassName("info-content");
  for (var i = 0; i < info_content_divs.length; i++) {
    info_content_divs[i].style.display = "none";
  }
}

//action for learn more btn 
function popInfo2() {
  loadInfoContainer();
  var bg_video = document.getElementById("myVideo1");
  bg_video.pause();
  paused_video = "myVideo1";
  var info_content = document.getElementById("info2");
  info_content.style.display = "initial";
}

function popInfo3() {
  loadInfoContainer();
  var bg_video = document.getElementById("myVideo2");
  bg_video.pause();
  paused_video = "myVideo2";
  var info_content = document.getElementById("info3");
  info_content.style.display = "initial";
}

function popInfo4() {
  loadInfoContainer();
  var bg_video = document.getElementById("myVideo3");
  bg_video.pause();
  paused_video = "myVideo3";
  var info_content = document.getElementById("info4");
  info_content.style.display = "initial";
}

function popInfo5() {
  loadInfoContainer();
  var bg_video = document.getElementById("myVideo4");
  bg_video.pause();
  paused_video = "myVideo4";
  var info_content = document.getElementById("info5");
  info_content.style.display = "initial";
}

//responsive callback
function responsiveFixer(isResponsive) {
  var bg_videos = document.getElementsByClassName("bg_video");
  for (var i = 0; i < bg_videos.length; i++) {
    if (isResponsive) {
      bg_videos[i].style.display = "none";
    } else {
      bg_videos[i].style.display = "initial";
    }
  
  }

  var rsp_divs = document.getElementsByClassName("responsive");
  for (var i = 0; i < rsp_divs.length; i++) {
    if (isResponsive) {
      rsp_divs[i].classList.add("responsive-div");
    } else {
      rsp_divs[i].classList.remove("responsive-div");
    }
  }

  var hrs = document.getElementsByTagName("hr");
  for (var i = 0; i < hrs.length; i++) {
    if (isResponsive) {
      hrs[i].style.visibility = "hidden";
      hrs[i].style.height = "30px";
    } else {
      hrs[i].style.visibility = "visible";
      hrs[i].style.height = "1px";
    }
  }

  var tableCells = document.getElementsByClassName("fp-tableCell");
  for (var i = 0; i < tableCells.length; i++) {
    if (isResponsive) {
      tableCells[i].classList.add("responsive-section");
    } else {
      tableCells[i].classList.remove("responsive-section");
    }
  }

  var rsp_texts = document.getElementsByClassName("responsive-text");
  for (var i = 0; i < rsp_texts.length; i++) {
    if (isResponsive) {
      rsp_texts[i].classList.add("responsive-text-style");
    } else {
      rsp_texts[i].classList.remove("responsive-text-style");
    }
  }

  var rsp_btns = document.getElementsByClassName("btn");
  for (var i = 0; i < rsp_btns.length; i++) {
    if (isResponsive) {
      rsp_btns[i].classList.add("responsive-btn");
    } else {
      rsp_btns[i].classList.remove("responsive-btn");
    }
  }

  var rlcs = document.getElementsByClassName("left-lower-content");
  for (var i = 0; i < rlcs.length; i++) {
    if (isResponsive) {
      rlcs[i].style.display = "none";
    } else {
      rlcs[i].style.display = "block";
    }
  }

  var lcs = document.getElementsByClassName("right-content");
  for (var i = 0; i < lcs.length; i++) {
    if (isResponsive) {
      lcs[i].classList.add("responsive-content");
    } else {
      lcs[i].classList.remove("responsive-content");
    }
  }

  var rucs = document.getElementsByClassName("left-content");
  for (var i = 0; i < rucs.length; i++) {
    if (isResponsive) {
      rucs[i].classList.add("responsive-content");
    } else {
      rucs[i].classList.remove("responsive-content");
    }
  }

  var infoContainerInner = document.getElementById("info-container-inner");
  if (isResponsive) {
    infoContainerInner.classList.add("responsive-inner-content");
  } else {
    infoContainerInner.classList.remove("responsive-inner-content");
  }

  var closeButton = document.getElementById("close-button");
  if (isResponsive) {
    closeButton.classList.add("responsive-close-button");
  } else {
    closeButton.classList.remove("responsive-close-button");
  }
}