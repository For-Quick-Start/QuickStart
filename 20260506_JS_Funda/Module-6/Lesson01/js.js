const headerTemplate = `
    <nav>
        <a class="top_nav" href="javascript:loadPage('index')">Home</a>
        <a class="top_nav" href="javascript:loadPage('projects')">Projects</a>
        <a class="top_nav" href="javascript:loadPage('tools')">Tools</a>
        <a class="top_nav" href="javascript:loadPage('about')">About</a>
    </nav>
`;

document.querySelector('.js-menu').innerHTML = headerTemplate;

var pages = {
    'index': {
        colorClass: 'green',
        template: '<h1>Home</h1><p>home page</p>',
    },
    'projects': {
        colorClass: 'lightblue',
        template: '<h1>Projects</h1><p>projects page</p>',
    },
    'tools': {
        colorClass: 'lightgrey',
        template: '<h1>Tools</h1><p>tools page</p>',
    },
    'about': {
        colorClass: 'orange',
        template: '<h1>About</h1><p>about page</p>',
    },
};

const loadPage = ( pageIndex ) => {
    const { colorClass, template } = pages[ pageIndex ];
    
    document.querySelector( '.js-content' ).innerHTML = template;
    //document.body.style.backgroundColor = color;
    document.body.classList.remove(document.body.dataset?.currentColorClass);
    // document.body.classList.remove('green');
    // document.body.classList.remove('lightblue');
    // document.body.classList.remove('lightgrey');
    // document.body.classList.remove('orange');
    document.body.classList.add(colorClass);
    document.body.dataset.currentColorClass = colorClass;
};

loadPage('index');









