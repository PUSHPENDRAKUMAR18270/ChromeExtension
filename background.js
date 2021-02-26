
// chrome.tabs.onUpdated.addListener(tab=>{
//     console.log(tab.tabId);
    // chrome.tabs.executeScript(tab.tabId,{file:'foreground.js'},function(){
    //     console.log("executed foreground.js");
    // });
    // chrome.tabs.get(tab.tabId,current_tab_info=>{
    //     if(current_tab_info.url.includes("youtube"))
    //     {
    //         console.log("youtube present");
    //     }
    //     else {
    //         console.log(current_tab_info.url);
    //     }
    // });
// });

// chrome.runtime.onMessage.addListener((msg, sender) => {
//     // First, validate the message's structure.
//     if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
//       // Enable the page-action for the requesting tab.
//       chrome.pageAction.show(sender.tab.id);
//     }
// });
// var views = chrome.extension.getViews();
// console.log("length "+ views.length);
// for (var i = 0; i < views.length; i++) {
//     console.log(views[i]);//.document.getElementById('timeSpent').textContent = "11:11:11";
    
// }