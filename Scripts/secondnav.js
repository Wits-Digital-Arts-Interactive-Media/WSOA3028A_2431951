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
    { name: "First Iteration",  href:  root+"/Designs/IxD.html" },
    { name: "Second Iteration", href:  root+"/Designs/WireframesFinal.html" },
    { name: "Last Iteration", href:  root+"/Designs/LastWireframes.html" },
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

async function fetchBlogTitle(url) {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.querySelector('.entry_heading').innerText;
  }

async function fetchBlogDate(url) {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.querySelector('.dt-published').innerText;
  }


let itemId = 1;

export function createBlogsMenu(current){
    const div = document.querySelector('.navbar2'); //fetches nav from doc 
    const ul = document.createElement('ul');

    for(let item of BlogItems){
        const li = document.createElement('li');

        li.id = `blogItem${itemId++}`;
        li.classList.add("revealUp")

        const title = document.createElement('h2')
        fetchBlogTitle(item.href).then(bloghead => {
            title.innerText = bloghead;
            li.appendChild(title);
        });

        const date = document.createElement('h4')
        fetchBlogDate(item.href).then(blogdate => {
            date.innerText = blogdate;
            li.appendChild(date);
        });


        const text = document.createElement('figcaption')
        fetchMetaContent(item.href).then(metaContent => {
            text.innerText = metaContent;
            li.appendChild(text);
          });

        const a = document.createElement("a");
        if (current != item.name) {
            
            a.innerText = "Read More";
            a.setAttribute("href", item.href);
            li.appendChild(a);
            a.classList.add("not_active");
            console.log(item.name)
        } 
        else { 
            a.innerText = "You Are Here"; 
            
            li.appendChild(a);
            a.classList.add("active")
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

        const title = document.createElement('h2')
        fetchBlogTitle(item.href).then(bloghead => {
            title.innerText = bloghead;
            li.appendChild(title);
        });

        const date = document.createElement('h4')
        fetchBlogDate(item.href).then(blogdate => {
            date.innerText = blogdate;
            li.appendChild(date);
        });


        const text = document.createElement('figcaption')
        fetchMetaContent(item.href).then(metaContent => {
            text.innerText = metaContent;
            li.appendChild(text);
          });

        li.classList.add("revealUp")
        const a = document.createElement("a");

        if (current != item.name) {
            
            a.innerText = "Read More";
            a.setAttribute("href", item.href);
            li.appendChild(a);
            a.classList.add("not_active");

        } else { 
            
            a.innerText = "You Are Here"; 
            //a.setAttribute("href", item.href);
            li.appendChild(a);
            a.classList.add("active")
            
        }

        ul.appendChild(li);
  }
    div.appendChild(ul);
};


export function createEssaysMenu(current){
    const div = document.querySelector('.navbar2'); //fetches nav from doc 
    const ul = document.createElement('ul');
    
    for(let item of EssayItems){
        const li = document.createElement('li');

        const title = document.createElement('h2')
        fetchBlogTitle(item.href).then(bloghead => {
            title.innerText = bloghead;
            li.appendChild(title);
        });

        const date = document.createElement('h4')
        fetchBlogDate(item.href).then(blogdate => {
            date.innerText = blogdate;
            li.appendChild(date);
        });


        const text = document.createElement('figcaption')
        fetchMetaContent(item.href).then(metaContent => {
            text.innerText = metaContent;
            li.appendChild(text);
          });


        li.classList.add("revealUp")
        const a = document.createElement("a");

        if (current != item.name) {
            
            a.innerText = "Read More";
            a.setAttribute("href", item.href);
            li.appendChild(a);
            a.classList.add("not_active");
        } else { 
            
            a.innerText = "You Are Here"; 
            //a.setAttribute("href", item.href);
            li.appendChild(a);
            a.classList.add("active")
         }

        ul.appendChild(li);
  }
    div.appendChild(ul);
};


document.addEventListener('DOMContentLoaded', function(event) {

    const open = document.querySelector(".openbtn");
    const nav = document.getElementById("Sidebar");
    nav.style.visibility = "hidden";

    open.addEventListener('click', function() {
        if (nav.style.visibility === "hidden") {
            nav.style.visibility = "visible"; // Show the element
            nav.style.width = "32vw";
            document.getElementById("main").style.marginLeft = "250px";
            open.style.visibility = "hidden";
        } else {
            nav.style.visibility = "hidden"; // Hide the element
        }
        
        
    })
    

    const close = document.querySelector(".closebtn");

    close.addEventListener('click', function() {
        const element = document.getElementById("Sidebar"); // Replace with your element's ID
        if (element.style.visibility === "visible") {
            element.style.visibility = "hidden";// Hide the element 
            element.style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
            open.style.visibility = "visible";
    }   else {
             element.style.visibility = "visible"; // Show the element
    }
        
    })

});


