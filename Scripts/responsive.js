function responsive() {
    var x = document.getElementById("mySideNav");
    if (x.className === "sidenav") {
        x.className += " responsive";
    } else {
        x.className = "sidenav";
    }}
    