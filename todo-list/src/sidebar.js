// Sidebar module
const sidebarModule = (components) => {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';

    const ul = document.createElement('ul');
    // Hamburger Menu
    const defaultLi = document.createElement('li');
    const defaultIcon = '<i class="fa-solid fa-bars"></i>';
    const defaultATag = `<a href="#" class="list-item">${defaultIcon}</a>`;
    defaultLi.innerHTML = defaultATag;
    ul.appendChild(defaultLi);
    // Seperating element
    const hrElement = document.createElement('hr');
    ul.appendChild(hrElement);

    for (let component of components) {
        let li = document.createElement('li');
        // li.className = `sidebar-${component['name'].toLowerCase()}`;
        let newChild = `<a href="#${component.name.toLowerCase()} class="list-item><i class="${component['icon']}"></i><span class="sidebar-element">${component['name']}</span></a>`;
        li.innerHTML = newChild;
        ul.appendChild(li);
    };

    sidebar.appendChild(ul);
    

    return sidebar;
};

export { sidebarModule };