// Project
const projectModule = (projectName, projectIcon='none', task=true, taskList) => {
    // Parent Element
    const element = document.createElement('div');
    element.id = `${projectName.toLowerCase()}-project`;

    // I - Project Header
    const contentHeader = document.createElement('div');
    contentHeader.className = 'content-header';
 
    const iconElement = document.createElement('i');
    iconElement.className = projectIcon;
    contentHeader.appendChild(iconElement);
    const contentHeaderText = document.createElement('span');
    contentHeaderText.className = 'content-header-text';
    contentHeaderText.textContent = ` ${projectName}`;
    contentHeader.appendChild(contentHeaderText);
    element.appendChild(contentHeader);

    // II - Task Button; not mandatory
    const addTaskBtn = task;
    if (addTaskBtn === true) {
        const taskBtn = document.createElement('div');
        taskBtn.className = 'new-task-btn';
        const taskIcon = document.createElement('i');
        taskIcon.className = 'fa-solid fa-plus new-task-icon';
        const taskText = document.createElement('span');
        taskText.className = 'new-task-btn-text';
        taskText.textContent = 'New Task';
        taskBtn.appendChild(taskIcon);
        taskBtn.appendChild(taskText);
        element.appendChild(taskBtn);
    }
    return element;
};


let customProject = (customProjectName) => {
    const customProjectParent = document.getElementsByClassName('custom-projects-container');
    let customProject = document.createElement('div');
    customProject.id = `${customProjectName.toLowerCase()}`;
    customProject.className = "btn sidebar-btn";
    customPoject.innerHTML += `
        <i class="fa-solid fa-circle" style="color: #${Math.floor(Math.random()*16777215).toString(16)}"></i>
        <span class="sidebar-project-name">Test</span>
    `
    customProjectParent.appendChild(customProject);
};

export { projectModule, customProject };
