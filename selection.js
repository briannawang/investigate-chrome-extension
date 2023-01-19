var a = window.getSelection().toString();
alert("wow! " + a);
toggle_iframe()

function toggle_iframe() {
    if (iframe.style.width == "0px"){
      iframe.style.width="250px";
    } else {
      iframe.style.width="0px";
    }
  }

window.addEventListener('load', function load(event) {
    var iframe = document.createElement('iframe');
    /* some settings, these are mine */
    iframe.style.width = "250px";
    iframe.style.background = "#eee";
    iframe.style.height = "100%";
    iframe.style.position = "fixed";
    iframe.style.top = "0px";
    iframe.style.right = "0px";
    iframe.style.zIndex = "1000000000000000";
    iframe.frameBorder = "none";
    /* end of settings */
    iframe.src = 
    chrome.runtime.getURL("popup.html");
    document.body.appendChild(iframe);
  });