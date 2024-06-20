//script to handle secondary navigation to navigate to specific subpages of the homepages...
const root = "/WSOA3028A_2431951";

const BlogItems = [
    { name: "Week1",  href: root+ "/Blogs/Week1.html", src: "/WebsitePictures/week1.png"},
    { name: "Week2", href:  root+"/Blogs/Week2.html", src: "/WebsitePictures/week1.png" },
    { name: "Week3", href:  root+"/Blogs/Week3.html", src: "/WebsitePictures/week1.png" },
    { name: "Week4", href: root+ "/Blogs/Week4.html", src: "/WebsitePictures/week1.png" },
    { name: "Week6", href:  root+"/Blogs/Week6.html" , src: "/WebsitePictures/week1.png"},
    { name: "Week8", href:  root+"/Blogs/Week8.html" , src: "/WebsitePictures/week1.png"},
    { name: "Week9", href:  root+"/Blogs/Week9.html" , src: "/WebsitePictures/week1.png"},
    { name: "Week10", href:  root+"/Blogs/Week10.html", src: "/WebsitePictures/week1.png" },
    { name: "Week11", href:  root+"/Blogs/Week11.html", src: "/WebsitePictures/week1.png" },
    { name: "Week12", href:  root+"/Blogs/Week12.html", src: "/WebsitePictures/week1.png" },
    { name: "Week13", href:  root+"/Blogs/Week13.html" , src: "/WebsitePictures/week1.png"},
    
];

const DesignItems = [
    { name: "IxD",  href:  root+"/Designs/IxD.html" },
    { name: "First Wireframes", href:  root+"/Designs/Wireframes.html" },
    { name: "Final Wireframes", href:  root+"/Designs/WireframesFinal.html" },
    
];

const EssayItems = [
    { name: "Essay1",  href:  root + "/Essays/Essay1.html" },
    { name: "Essay2", href:  root + "/Essays/Essay2.html" },
   
];

async function fetchMetaContent(url) {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.querySelector('meta[name="description"]').getAttribute('content');
  }

let itemId = 1;

export function createBlogsMenu(current){
    const div = document.querySelector('.navbar2'); //fetches nav from doc 
    const ul = document.createElement('ul');

    for(let item of BlogItems){
        const li = document.createElement('li');
        /*const img = document.createElement('img');
        img.setAttribute("src", item.src);
        li.appendChild(img);*/

        li.id = `blogItem${itemId++}`;
        li.classList.add("revealUp")

        const text = document.createElement('figcaption')
        fetchMetaContent(item.href).then(metaContent => {
            text.innerText = metaContent;
            li.appendChild(text);
          });

        
        if (current != item.name) {
            const a = document.createElement("a");
            a.innerText = item.name;
            a.setAttribute("href", item.href);
            li.appendChild(a);
            a.classList.add("active");
        } 
        else { 
            li.innerText = item.name; 
        }

        ul.appendChild(li);
    }

    div.appendChild(ul);
};

export function createDesignsMenu(current){
    const div = document.querySelector('.navbar2'); //fetches nav from doc 
    const ul = document.createElement('ul');
    
    for(let item of DesignItems){
        const li = document.createElement('li');

        const text = document.createElement('figcaption')
        fetchMetaContent(item.href).then(metaContent => {
            text.innerText = metaContent;
            li.appendChild(text);
          });

        li.classList.add("revealUp")

        if (current != item.name) {
            const a = document.createElement("a");
            a.innerText = item.name;
            //a.href = item.name;
            a.setAttribute("href", item.href);
            li.appendChild(a);
            a.classList.add("active")
        } else { li.innerText = item.name; }

        ul.appendChild(li);
  }
    div.appendChild(ul);
};


export function createEssaysMenu(current){
    const div = document.querySelector('.navbar2'); //fetches nav from doc 
    const ul = document.createElement('ul');
    
    for(let item of EssayItems){
        const li = document.createElement('li');

        const text = document.createElement('figcaption')
        fetchMetaContent(item.href).then(metaContent => {
            text.innerText = metaContent;
            li.appendChild(text);
          });


        li.classList.add("revealUp")

        if (current != item.name) {
            const a = document.createElement("a");
            a.innerText = item.name;
            //a.href = item.name;
            a.setAttribute("href", item.href);
            li.appendChild(a);
            a.classList.add("active")
        } else { li.innerText = item.name; }

        ul.appendChild(li);
  }
    div.appendChild(ul);
};

