function sendMessageToContentScript()
{
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
        chrome.tabs.sendMessage(
        tabs[0].id,{from: 'pop_up', subject: 'stopTimer'});
  });
}
document.getElementById("getTimeSpent").addEventListener("click",function(){
  chrome.storage.local.get(["timeSpent"], function(result) {
    console.log('Value currently is ' + result.timeSpent);
    document.getElementById("timeSpent").textContent=result.timeSpent;
  });
  
 
});

document.getElementById("reset").addEventListener("click",function(){
  sendMessageToContentScript();
  document.getElementById("getTimeSpent").click();
  document.getElementById("startTimer").disabled=false;
  document.getElementById("startTimer").style.backgroundColor='lightblue';
  chrome.storage.local.set({"timeSpent": "00:00:00"});
  
});

document.getElementById("startTimer").addEventListener("click",function(){
  document.getElementById("startTimer").disabled=true;
  document.getElementById("startTimer").style.backgroundColor='gray';
  chrome.tabs.query({active: true, currentWindow: true},(tabs)=>{
    chrome.tabs.executeScript(tabs[0].id,{file:'content.js'},function(){
      console.log("executed content.js");
      
    });
  });
});

