

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


/*potential code for all images being clickable:

const ImageItems = [{name:Image1}, {name: Image2}, {name: Image3}];
const TextItems = [{name:text1}, {name: text2}, {name: text3}];

function click()
{

  for(let image of ImageItems )
  {
    image = document.getElementById("image"+)
    for(let text of TextItems)
      {
        text = document.getElementById("text"+)
        if(ImageItems[image].addEventListener("click"))
          {
            TextItems[text].hidden = false;
          }
        
      }
 
  }



    
};



var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function() {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
    }
  }
}

function stopPropagation(event){
  event.stopPropagation();
}
};



*/
