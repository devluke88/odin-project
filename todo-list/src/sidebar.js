// Sidebar module


const sidebarModule = (components) => {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';

    const ul = document.createElement('ul');
    ul.className = 'default-projects';
    ul.innerHTML = "";
    for (let component of components) {
        ul.innerHTML += `
        <div class="btn sidebar-btn" id="${component.name.toLowerCase()}">
            <i class="${component.icon}"></i>
            <span class="sidebar-project-name">${component.name}</span>
        </div>`;
    };

    sidebar.appendChild(ul);
    

    return sidebar;
};

export { sidebarModule };