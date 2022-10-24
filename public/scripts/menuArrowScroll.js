// makes the menu toggle component visible when user scrolls
const checkScroll = () => {
    console.log(window.scrollY);
    console.log(window.innerHeight); 
    if(window.scrollY >= window.innerHeight/4) {
        // console.log("Scrolled past trigger");
        document.getElementById('menuArrowDiv').classList.add('show-menuArrow');
    }
    else {
        document.getElementById('menuArrowDiv').classList.remove('show-menuArrow');
    }
}

// document.getElementById('menuArrowDiv').style.visibility = 'hidden';

window.addEventListener("scroll", checkScroll);