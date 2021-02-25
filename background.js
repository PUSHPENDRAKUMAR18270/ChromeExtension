
chrome.tabs.onUpdated.addListener(tab=>{
    console.log(tab.tabId);
    chrome.tabs.executeScript(tab.tabId,{file:'foreground.js'},function(){
        console.log("executed foreground.js");
    });
    // chrome.tabs.get(tab.tabId,current_tab_info=>{
    //     if(current_tab_info.url.includes("youtube"))
    //     {
    //         console.log("youtube present");
    //     }
    //     else {
    //         console.log(current_tab_info.url);
    //     }
    // });
});