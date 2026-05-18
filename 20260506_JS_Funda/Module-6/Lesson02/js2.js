const $menuItems = document.querySelectorAll('.js-menu-item');

const deselectAllItems = function() {
    const $selectedNode = 
    document.querySelector('.js-menu-item.selected');
    if (typeof $selectedNode === 'object') {
        $selectedNode.classList.remove('selected');
    }
}

const handleClick = function(event) {
    deselectAllItems();
    event.target.classList.add('selected');
}

for (let $item of $menuItems) {
    $item.addEventListener('click', handleClick);
}

