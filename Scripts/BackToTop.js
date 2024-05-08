let mybutton = document.getElementById("scrollUp");

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    console.log("display");
    mybutton.display = true;
  } else {
    console.log("not displayed");
    mybutton.display = false;
  }
}


function topFunction() {

  console.log("clicked");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export function click()
{
    window.onscroll = function() {scrollFunction()};
    mybutton.onclick = topFunction();
}