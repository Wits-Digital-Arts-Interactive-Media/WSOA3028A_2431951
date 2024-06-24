export function click()
{

  var image = document.getElementById("image1");
  var text = document.getElementById("text1");
  image.onclick = function(){
    text.hidden = !text.hidden;
  };

};

function stopPropagation(event)
{
  event.stopPropagation();
}


