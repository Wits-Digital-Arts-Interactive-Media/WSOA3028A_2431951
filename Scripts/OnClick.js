



function click()
{

    var image = document.getElementById("image1");
    
    image.addEventListener("click", convert());
    
};


function convert() {

    let text = document.getElementById("text1"); 
    console.log("done");
    text.hidden = false;
   
};

document.addEventListener("DOMContentLoaded",()=> click());

/*
const imageIds = [{ name:"image1"}, {name:"image2"}, {name:"image3"},];
const textIds = [{name:"text1"}, {name:"text2"}, {name:"text3"},];
   const images = document.querySelectorAll("img");
    const texts = document.querySelectorAll("div");

    images.forEach(image => {image.addEventListener("click", convert())})
      /*const texts = document.querySelectorAll("div");

    texts.forEach(text => {textUnhidden(text);})
    
    console.log("Clicked!");*/