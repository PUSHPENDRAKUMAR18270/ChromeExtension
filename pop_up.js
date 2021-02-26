// $('a').click(function() {
//     $('#sites a').removeClass('focus');
//     $(this).find('a').addClass('focus');
//   });

//   document.querySelectorAll("a").addEventListener("click", function(){
//       document.querySelectorAll("a").addClass('focus');

//   });
// function removeFocusFromAll()
// {
//     var sites=document.querySelectorAll("i");
//     for(var i=0;i<sites.length;i++)
//     {
//         sites[i].classList.remove('focus');
//     }
    
// }
// document.querySelectorAll("i")[0].classList.add('focus');
// document.getElementById("youtube").addEventListener("click", function() {
//     removeFocusFromAll();
//     document.querySelectorAll("i")[0].classList.add('focus');
//   });
//   document.getElementById("facebook").addEventListener("click", function() {
//     removeFocusFromAll();
//     document.querySelectorAll("i")[1].classList.add('focus');

//   });
//   document.getElementById("instagram").addEventListener("click", function() {
//     removeFocusFromAll();
//     document.querySelectorAll("i")[2].classList.add('focus');
//   });
//   document.getElementById("mail").addEventListener("click", function() {
//     removeFocusFromAll();
//     document.querySelectorAll("i")[3].classList.add('focus');
//   });


// window.addEventListener('DOMContentLoaded', () => {
  // ...query for the active tab...
  
// });

// var port = chrome.extension.connect({
//   name: "Sample Communication"
// });
// port.postMessage("Hi BackGround");
// port.onMessage.addListener(function(msg) {
//   console.log("message recieved" + msg);
//   document.getElementById("timeSpent").textContent=msg;
// });
//document.getElementById("timeSpent").textContent="hello there";
// chrome.runtime.onMessage.addListener(
//   function(msg, sender, sendResponse) {
//     document.getElementById("timeSpent").textContent="hello there";
//   }
// );
// function getStorageKeyValue(key, onGetStorageKeyValue){
//   chrome.storage.local.get([key], function(result) {
//      onGetStorageKeyValue(result.key);
//   });
// }

// document.getElementById("startTimer").disabled=true;

function sendMessageToContentScript()
{
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
        chrome.tabs.sendMessage(
        tabs[0].id,{from: 'pop_up', subject: 'stopTimer'});
  });
  // var port = chrome.runtime.connect({name: "Timer"});
  // port.postMessage({info: "stopTimer"});
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

