
document.addEventListener('DOMContentLoaded', function(event) {
    const flipButtons = document.querySelectorAll('flip-button');

    flipButtons.forEach(button => {
        console.log('event listner added');
        button.addEventListener('click', function() {
            const flipElement = document.querySelector('flip');
            flipElement.classList.toggle('do-flip');
            
        });
    });
});


/*document.addEventListener('DOMContentLoaded', function(event) {

    document.getElementById('FlipFrontBtn').style.visibility = 'visible';
    document.getElementById('FlipBackBtn').style.visibility = 'visible';
  
    document.getElementById('FlipFrontBtn').onclick = function() {
    document.getElementById('flip').classList.toggle('do-flip');
    };
  
    
    document.getElementById('FlipBackBtn').onclick = function() {
    document.getElementById('flip').classList.toggle('do-flip');
    };
   
  
  });*/
