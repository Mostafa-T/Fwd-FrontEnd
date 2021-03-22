
/*

    Comments:
    =========

        - I couldn't reach a way where I could have access to the created elements globaly and loop over them
            -- lead that I couldn't create the scrollTo function.
            -- as well as adding active class for the link while its on the viewport.

    
    Note: thinking about a structure which would help me to improve the code and make everything works well.

*/

/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
let listItems;
let itemLinks;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// build the nav

sections.forEach(sec => {
    listItems = document.createElement('li');
    itemLinks = document.createElement('a');

    // grabing the section name from the data-nav attribute and adding it to the nav link
    itemLinks.textContent = sec.dataset.nav;
    itemLinks.setAttribute('href', '#' + sec.getAttribute('id'));

    //Adding class to the menu link
    itemLinks.classList.add('menu__link');

    // Appending elements
    listItems.appendChild(itemLinks);
    navList.appendChild(listItems);

});


// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', () => {

    let scrollPosition = document.documentElement.scrollTop;

    sections.forEach(part => {
        // Remove the active class if not in viewport
        part.classList.remove('your-active-class');

        if (scrollPosition > part.offsetTop - part.offsetHeight * 0.50
            && scrollPosition < part.offsetTop + part.offsetHeight * 0.50) {

            part.classList.add('your-active-class');
        }
    });
});



