var a = window.getSelection().toString();

// alert("wow! " + a);

alert(document.getElementById("output") + "this is element" + a);
chrome.runtime.sendMessage({selection: a}, function(response) {
    document.getElementById("output").innerHTML  =  a + "EEEE";   
})