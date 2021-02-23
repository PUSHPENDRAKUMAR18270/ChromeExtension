// $('a').click(function() {
//     $('#sites a').removeClass('focus');
//     $(this).find('a').addClass('focus');
//   });

//   document.querySelectorAll("a").addEventListener("click", function(){
//       document.querySelectorAll("a").addClass('focus');

//   });
function removeFocusFromAll()
{
    var sites=document.querySelectorAll("i");
    for(var i=0;i<sites.length;i++)
    {
        sites[i].classList.remove('focus');
    }
    
}
document.querySelectorAll("i")[0].classList.add('focus');
document.getElementById("youtube").addEventListener("click", function() {
    removeFocusFromAll();
    document.querySelectorAll("i")[0].classList.add('focus');
  });
  document.getElementById("facebook").addEventListener("click", function() {
    removeFocusFromAll();
    document.querySelectorAll("i")[1].classList.add('focus');

  });
  document.getElementById("instagram").addEventListener("click", function() {
    removeFocusFromAll();
    document.querySelectorAll("i")[2].classList.add('focus');
  });
  document.getElementById("mail").addEventListener("click", function() {
    removeFocusFromAll();
    document.querySelectorAll("i")[3].classList.add('focus');
  });