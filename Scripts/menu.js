//script to handle menu on all homepages
const root = "/WSOA3028A_2431951";

const menuItem = [
    { name: "Home",  href: `${root}/index.html` },
    { name: "Blogs", href: root +"/Blogs/index.html" },
    { name: "Essays", href:root + "/Essays/index.html"},
    { name: "Designs", href:root + "/Designs/index.html" },
    { name: "Portfolio", href: root +"/Portfolio/index.html" },
    { name: "Profile", href: root +"/Profile/index.html" },
];

export function createMenu(current){
    const div = document.querySelector('.sidenav');//fetches nav from doc 
    const ul = document.createElement('ul');

    for(let item of menuItem){
        const li = document.createElement('li');
        li.classList.add("transition");
        const a = document.createElement("a")

        if (current != item.name) {
            a.innerText = item.name
            //a.href = item.name;
            a.setAttribute("href", item.href)
            a.classList.add("not_active");
            li.appendChild(a)

        } else { 
            a.innerText = item.name
            //a.href = item.name;
            //a.setAttribute("href", item.href)
            a.classList.add("active") 
            li.appendChild(a)

        }

        ul.appendChild(li)
       
    }

    div.appendChild(ul);

};


