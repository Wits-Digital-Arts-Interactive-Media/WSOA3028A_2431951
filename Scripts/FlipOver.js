document.addEventListener('DOMContentLoaded', function(event) {
    const flipButtons = document.querySelectorAll(".flipbutton");
    
    console.log(flipButtons.length);

    flipButtons.forEach(button => {
        
        button.addEventListener('click', function() {
            const elementId = this.dataset.target; // Assuming you set a data attribute like data-target="element1"
            const elementToChange = document.getElementById(elementId);

            if (elementToChange) {
                elementToChange.classList.toggle("do-flip");
                console.log('flip element');
            } else {
                console.log('Element with class "flip" not found.');
            }
            
        });
    });
});


