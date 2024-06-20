console.log(document.getElementById("part1").innerText)
var words = [document.getElementById("part1").innerText,document.getElementById("part2").innerText, document.getElementById("part3").innerText],
part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skip_count = 0,
skip_delay = 15,
speed = 70;
var wordflick = function () {
setInterval(function () {
  if (forwards) {
    if (offset >= words[i].length) {
      ++skip_count;
      if (skip_count == skip_delay) {
        forwards = false;
        skip_count = 0;
      }
    }
  }
  else {
    if (offset == 0) {
      forwards = true;
      i++;
      offset = 0;
      if (i >= len) {
        i = 0;
      }
    }
  }
  part = words[i].substr(0, offset);
  if (skip_count == 0) {
    if (forwards) {
      offset++;
    }
    else {
      offset--;
    }
  }
  $('.Summary').text(part);
},speed);
};

$(document).ready(function () {
wordflick();
});

/*window.onload = function() {
    var p = document.getElementById('animated-text');
    var text = p.innerText;
    p.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement('span');
      span.innerText = text[i];
      span.setAttribute('data-text', text[i]);
      p.appendChild(span);
    }
  };*/