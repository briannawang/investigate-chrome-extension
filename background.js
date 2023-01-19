chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let clippings = ["meo"];
    chrome.storage.sync.get("list", function (result) {
            clippings = [request.selection, "poo"];
        sendResponse({clips: clippings});
        chrome.storage.sync.set({
            list: clippings,
        });
    });
    return true
});