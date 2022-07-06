// Project
const projectModule = (projectName, projectIcon='none', task=true) => {
    // Parent Element
    const element = document.createElement('div');
    element.id = projectName.toLowerCase();

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


const addNewCustomProject = (customPojectName) => {
    const project = document.createElement('div');
}

export { projectModule };
