//script to handle menu on all homepages


/*const root = "/WSOA3028A_2431951"

const menuItem = [
    { name: "Home", href: root + "/Index.html" },
    //Type Coercion - it is taking a const, adding it to a string and making it the string it expects
    { name: "Blogs", href: `${root}/Blogs/index.html` },
    //back-tick syntax (template strings) `...` - allows the use of whitespace, ", ', interpolation, and substitution
    //allows for string interpolation ${ } - automatically replaces variables and expressions with real values
    { name: "Essays", href: `${root}/Essays/index.html` },
    { name: "Portfolio", href: `${root}/Portfolio/profile.html` },
    { name: "Designs", href: `${root}/Designs/index.html` },
]


export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")

    for (let item of menuItem) {
        const li = document.createElement("li")

        if (currentPage != menuItem.name) {
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        } else { li.innerText = menuItem.name }

        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

*/
const root = "/WSOA3028A_2431951";

const menuItem = [
    { name: "Home",  href: "/index.html" },
    { name: "Blogs", href: "/Blogs/index.html" },
    { name: "Essays", href: "/Essays/index.html" },
    { name: "Portfolio", href: "/Portfolio/index.html" },
    { name: "Designs", href: "/Designs/index.html" },
    { name: "Profile", href: "/Profile/index.html" },
];


function createMenu(current){
    const nav = document.querySelector('nav');//fetches nav from doc 
    const ul = document.createElement('ul');

    for(let item of menuItem){
        const li = document.createElement('li');
        if (current != item.name) {
            const a = document.createElement("a")
            a.innerText = item.name
            //a.href = item.name;
            a.setAttribute("href", item.href)
            li.appendChild(a)
        } else { li.innerText = item.name }

        ul.appendChild(li)
       
       /* const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = item.name;
        a.href = item.name;
        li.appendChild(a);
        ul.appendChild(li);*/
  }

    nav.appendChild(ul);


};

document.addEventListener("DOMContentLoaded",()=> createMenu())