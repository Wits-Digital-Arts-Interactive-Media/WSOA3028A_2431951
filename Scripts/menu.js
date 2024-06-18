//script to handle menu on all homepages
const root = "/WSOA3028A_2431951";

const menuItem = [
    { name: "Home",  href: root +"/index.html"},
    { name: "Blogs", href: root +"/Blogs/index.html" },
    { name: "Essays", href:root + "/Essays/index.html"},
    { name: "Portfolio", href: root +"/Portfolio/index.html" },
    { name: "Designs", href:root + "/Designs/index.html" },
    { name: "Profile", href: root +"/Profile/index.html" },
];

export function createMenu(current){
    const div = document.querySelector('.sidenav');//fetches nav from doc 
    const ul = document.createElement('ul');

    for(let item of menuItem){
        const li = document.createElement('li');
        li.classList.add("transition");
        if (current != item.name) {
            const a = document.createElement("a")
            a.innerText = item.name
            //a.href = item.name;
            a.setAttribute("href", item.href)
            a.classList.add("active") 
            li.appendChild(a)
        } else { li.innerText = item.name}

        ul.appendChild(li)
       
    }

    div.appendChild(ul);

};

export function openNav() {
     
    //const div = document.querySelector('div');
       //const logo = document.createElement('label')
    //document.getElementById("mySidenav").width = "250px";
   // document.getElementById("main").style.marginLeft = "250px";
   // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  };
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  };

//document.addEventListener("DOMContentLoaded",()=> createMenu())
 /* const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = item.name;
        a.href = item.name;
        li.appendChild(a);
        ul.appendChild(li);*/

