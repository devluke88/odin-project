// Project
const projectModule = (projectName, projectIcon='none', task=true, taskList) => {
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

    // III - Task Container
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskContainer.style.display = 'flex';
    taskContainer.style.flexDirection = 'column';
    // Check if this should be outside of this function!!!!!!
    for (let i = 0; i < taskList.length; i++) {
        // Display task - provide list from object
        let task = `<div class="task-item" data-task-item-index="${i}">`
                    `<div class="task-title">${taskList[i].title}</div>`
                    `<div class="task-description">${taskList[i].description}</div>`
                    `<div class="task-due-date">${taskList[i].dueDate}</div>`
                    `<div class="task-due-priority">${taskList[i].priority}</div>`
        taskContainer.innerHTML += task
    }
    element.appendChild(taskContainer);
    return element;
};


const addNewCustomProject = (customPojectName) => {
    const project = document.createElement('div');
}

export { projectModule };
