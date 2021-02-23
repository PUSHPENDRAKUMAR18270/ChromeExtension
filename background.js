// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let url = tabs[0].url;
//     // use `url` here inside the callback because it's asynchronous!
//     console.log(url);
// });
chrome.tabs.onActivated.addListener(tab=>{
    console.log(tab.tabId);
    chrome.tabs.get(tab.tabId,current_tab_info=>{
        if(current_tab_info.url.includes("youtube"))
        {
            console.log("youtube present");
        }
        else {
            console.log(current_tab_info.url);
        }
    });
});