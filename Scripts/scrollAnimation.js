document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".navbar2 li");
    console.log("items found " + listItems.length)
    listItems.forEach((item) => {
        console.log(item)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("visible")
                    item.style.opacity = 1;
                }
            });
        });
        observer.observe(item);
    });
});
 // Add a class to trigger the reveal effect when the element enters the viewport
 /*const revealElement = document.querySelector(".revealUp");
 window.addEventListener("scroll", () => {
     const rect = revealElement.getBoundingClientRect();
     const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
     if (isVisible) {
         revealElement.classList.add("visible");
     }
 });*/

 // Example using JavaScript (add this to your script):