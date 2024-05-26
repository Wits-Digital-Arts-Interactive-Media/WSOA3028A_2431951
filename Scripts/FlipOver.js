document.addEventListener('DOMContentLoaded', function(event) {

    document.getElementById('FlipFrontBtn').style.visibility = 'visible';
    document.getElementById('FlipBackBtn').style.visibility = 'visible';
  
    document.getElementById('FlipFrontBtn').onclick = function() {
    document.getElementById('flip').classList.toggle('do-flip');
    };
  
    window.onload=function(){
    document.getElementById('FlipBackBtn').onclick = function() {
    document.getElementById('flip').classList.toggle('do-flip');
        }
    };
  
  });