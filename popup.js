chrome.tabs.query({active: true}, function(tabs){
    chrome.scripting.executeScript( {
        target: {tabId: tabs[0].id},
        files: ['selection.js']
    });
})

