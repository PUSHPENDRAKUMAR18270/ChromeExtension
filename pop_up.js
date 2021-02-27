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

document.getElementById("getTimeSpent").disabled=true;
document.getElementById("getTimeSpent").style.backgroundColor='gray';

chrome.storage.local.get(["startTimerButton"], function(result) {
  //console.log('Value currently is ' + result.timeSpent);
  if(result.startTimerButton=="clickedOnce")
    {
      document.getElementById("startTimer").disabled=true;
      document.getElementById("startTimer").style.backgroundColor='gray';
      document.getElementById("getTimeSpent").disabled=false;
      document.getElementById("getTimeSpent").style.backgroundColor='lightblue';
    }
});

document.getElementById("getTimeSpent").addEventListener("click",function(){
  chrome.storage.local.get(["timeSpent"], function(result) {
    //console.log('Value currently is ' + result.timeSpent);
    document.getElementById("timeSpent").textContent=result.timeSpent;
  });
  
 
});

document.getElementById("reset").addEventListener("click",function(){
  chrome.storage.local.set({"startTimerButton": "notClicked"});
  sendMessageToContentScript();
  document.getElementById("getTimeSpent").click();
  document.getElementById("startTimer").disabled=false;
  document.getElementById("startTimer").style.backgroundColor='lightblue';
  chrome.storage.local.set({"timeSpent": "00:00:00"});
  
});

document.getElementById("startTimer").addEventListener("click",function(){
  document.getElementById("getTimeSpent").disabled=false;
  document.getElementById("getTimeSpent").style.backgroundColor='lightblue';
  chrome.storage.local.set({"startTimerButton": "clickedOnce"},function(){
    document.getElementById("startTimer").disabled=true;
    document.getElementById("startTimer").style.backgroundColor='gray';
    chrome.tabs.query({active: true, currentWindow: true},(tabs)=>{
      chrome.tabs.executeScript(tabs[0].id,{file:'content.js'},function(){
        console.log("executed content.js");
      });
    });
  });
});

