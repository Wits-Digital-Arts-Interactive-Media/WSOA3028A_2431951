// Make the DIV element draggable:
const elements= document.querySelectorAll('.draggable');
elements.forEach(dragElement);

function dragElement(elmnt) {
  var pos1 = Math.floor((Math.random() * 10) + 1), pos2 = Math.floor((Math.random() * 10) + 1), pos3 = Math.floor((Math.random() * 10) + 1), pos4 = Math.floor((Math.random() * 10) + 1);

  console.log(pos1, pos2, pos3, pos4);
  if (document.getElementById(elmnt.id + "draggable")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "draggable").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


$(document).ready(function() {
  $(".item3 .draggable").each(function() {
    var draggableWidth = $(this).outerWidth();
    var draggableHeight = $(this).outerHeight();

    var l = Math.floor(Math.random() * ($(".item3").width() - draggableWidth));
    var t = Math.floor(Math.random() * ($(".item3").height() - draggableHeight));

    console.log(l + " " + t)
    $(this).css("left", l);
    $(this).css("top", t);
  })
})

