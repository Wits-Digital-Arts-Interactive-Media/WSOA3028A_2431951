
const imageIds = [{pos: 1, name:"image1", clicked:false}, {pos: 2,name:"image2", clicked:false}, {pos: 3,name:"image3", clicked:false},];
const textIds = [{pos: 1,name:"text1"}, {pos: 2,name:"text2"}, {pos: 3,name:"text3"},];


function click()
{
    const images = document.querySelectorAll("img");
    const texts = document.querySelectorAll("div");

    images.forEach(image => {image.addEventListener("click", convert())})

    //var image = document.getElementById(item.name);
   // image.addEventListener("click", convert(item.pos));

 
};

function textUnhidden(text)
{
    text.hidden = false;
}


function convert() {


    const texts = document.querySelectorAll("div");

    texts.forEach(text => {textUnhidden(text);})
    
    console.log("Clicked!");
   
};

document.addEventListener("DOMContentLoaded",()=> click())