/*
    =====================================
    script.js
    =====================================

    This file controls:
    1. Navigation click behavior
    2. CSS class changes
    3. Showing/hiding content panels
*/


/* =====================================
   SELECT ALL NAVIGATION BUTTONS
===================================== */

/*
    querySelectorAll() returns all elements
    with the class "nav-link".
*/
const navLinks = document.querySelectorAll('.nav-link');


/* =====================================
   SELECT ALL CONTENT PANELS
===================================== */

/*
    This selects all elements with the
    class "content-panel".
*/
const contentPanels = document.querySelectorAll('.content-panel');


/* =====================================
   LOOP THROUGH EACH NAVIGATION BUTTON
===================================== */

/*
    forEach() runs code once for every
    navigation button.
*/
navLinks.forEach((button) => {

    /*
        Add a click event listener
        to each navigation button.
    */
    button.addEventListener('click', () => {

        /* =====================================
           REMOVE ACTIVE CLASS FROM ALL BUTTONS
        ===================================== */

        navLinks.forEach((link) => {

            /*
                Remove the active-link class
                from every button.
            */
            link.classList.remove('active-link');

        });


        /* =====================================
           ADD ACTIVE CLASS TO CLICKED BUTTON
        ===================================== */

        /*
            "button" refers to the button
            that was clicked.
        */
        button.classList.add('active-link');


        /* =====================================
           HIDE ALL CONTENT PANELS
        ===================================== */

        contentPanels.forEach((panel) => {

            /*
                Remove active-content class
                from all content sections.
            */
            panel.classList.remove('active-content');

        });


        /* =====================================
           FIND TARGET CONTENT PANEL
        ===================================== */

        /*
            Read the data-target attribute
            from the clicked button.
        */
        const targetID = button.getAttribute('data-target');


        /*
            Use the ID to locate
            the correct content panel.
        */
        const targetPanel = document.getElementById(targetID);


        /* =====================================
           SHOW THE SELECTED PANEL
        ===================================== */

        targetPanel.classList.add('active-content');

    });

});
