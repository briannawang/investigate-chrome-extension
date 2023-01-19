window.onload  =  function() {
chrome.tabs.query({active: true}, function(tabs){
    chrome.scripting.executeScript( {
        target: {tabId: tabs[0].id},
        func: () => {
            var a = window.getSelection().toString();

// alert("wow! " + a);

alert(document.getElementById("output") + "this is element" + a);
chrome.runtime.sendMessage({selection: a}, function(response) {
    document.getElementById("output").innerHTML  =  a + "EEEE";   
})
        }
    }
    );
})

}