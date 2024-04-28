//script to handle secondary navigation to navigate to specific subpages of the homepages...


const BlogItems = [
    { name: "Week1",  href: "/Blogs/Week1.html", Image: "/WebsitePictures/week1.png"},
    { name: "Week2", href: "/Blogs/Week2.html" },
    { name: "Week3", href: "/Blogs/Week3.html" },
    { name: "Week4", href: "/Blogs/Week4.html" },
    { name: "Week6", href: "/Blogs/Week6.html" },
    { name: "Week8", href: "/Blogs/Week8.html" },
    { name: "Week9", href: "/Blogs/Week9.html" },
    { name: "Week10", href: "/Blogs/Week10.html" },
];

const DesignItems = [
    { name: "IxD",  href: "/Designs/IxD.html" },
    { name: "First Wireframes", href: "/Designs/Wireframes.html" },
    { name: "Final Wireframes", href: "/Designs/WireframesFinal.html" },
    
];

const EssayItems = [
    { name: "Essay1",  href: "/Essays/Essay1.html" },
    { name: "Esssay2", href: "/Essays/Essay2.html" },
   
];


export function createBlogsMenu(current){
    const nav = document.querySelectorAll('nav'); //fetches nav from doc 
    const ul = document.createElement('ul');
    
    for(let item of BlogItems){
        const li = document.createElement('li');
        if (current != item.name) {
            const a = document.createElement("a");
            a.innerText = item.name;
            //a.href = item.name;
            a.setAttribute("href", item.href);
            a.setAttribute("Image", item.Image);

            li.appendChild(a)
        } else { li.innerText = item.name; }

        ul.appendChild(li);
  }
    nav[1].appendChild(ul);
};

export function createDesignsMenu(current){
    const nav = document.querySelectorAll('nav'); //fetches nav from doc 
    const ul = document.createElement('ul');
    
    for(let item of DesignItems){
        const li = document.createElement('li');
        if (current != item.name) {
            const a = document.createElement("a");
            a.innerText = item.name;
            //a.href = item.name;
            a.setAttribute("href", item.href);
            li.appendChild(a);
        } else { li.innerText = item.name; }

        ul.appendChild(li);
  }
    nav[1].appendChild(ul);
};


export function createEssaysMenu(current){
    const nav = document.querySelectorAll('nav'); //fetches nav from doc 
    const ul = document.createElement('ul');
    
    for(let item of EssayItems){
        const li = document.createElement('li');
        if (current != item.name) {
            const a = document.createElement("a");
            a.innerText = item.name;
            //a.href = item.name;
            a.setAttribute("href", item.href);
            li.appendChild(a);
        } else { li.innerText = item.name; }

        ul.appendChild(li);
  }
    nav[1].appendChild(ul);
};

