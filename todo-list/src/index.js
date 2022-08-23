import './style.css';
import { projectModule, customProject } from './project'
import { sidebarModule } from './sidebar'
import { navbarModule } from './navbar'
// import { modalModule } from './modal'

let todoList = [];

// Function to generate unique id for the task
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// Function to display given selected section
function getSection(e) {
    e.preventDefault();
    const clickedBtn = e.target.textContent.toLowerCase();
    if (clickedBtn != 'projects') {
        // Action dedicated for any button apart og 'Projects'
        const element = document.getElementById(clickedBtn);
        for (let i = 0; i < componentsList.length; i++) {
            let searchedComponent = componentsList[i].name.toLowerCase();
            if (searchedComponent != clickedBtn) {
                if (searchedComponent != 'projects') {
                    const component = document.getElementById(componentsList[i].name.toLowerCase());
                    component.style.display = 'none';
                }
            }
            else {
                element.style.display = 'flex';
                element.style.flexDirection = 'column';
            }
        }
    }
    else {
        // Action dedicated once 'Projects' button has been clicked
        console.log(`Hello Projects Button!`)
    }   
};

//Function to restart the page
function takeMeHome(e) {
    e.preventDefault();
    window.location.reload();
}

// Array with sidebar menu components
let defaultProjectsData = [
    {name: 'Inbox', icon: 'fa-solid fa-inbox'},
    {name: 'Today', icon: 'fa-solid fa-calendar-day'},
    // {name: 'Projects', icon: 'fa-solid fa-code-branch'},
    // {name: 'Completed', icon: 'fa-solid fa-circle-check'},
    // {name: 'All', icon: 'fa-solid fa-list'},
]

// APP
const app = document.querySelector('.app');
//
// NAVBAR SECTION
//
const logoIcon = 'fa-solid fa-check-double';
const logoText = 'todoList';
const navbar = navbarModule(logoIcon, logoText)
app.append(navbar);
// Reload page when clicked on logo
const logoElement = document.querySelector('.logo-element')
logoElement.addEventListener('click', takeMeHome)

//
// SIDEBAR SECTION
//
function collapseProjects() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}

let mainContent = document.getElementsByClassName('content');

// Show given project content
let showProject = (e) => {
    // Get the id of the project, for example inbox, today, test ...
    let projectID = ""
    if (e.target.id === "") {
        projectID = e.target.parentElement.id
    }
    else {
        projectID = e.target.id
    }
    let projectContent = document.getElementById(`${projectID}-project`);
    // Show the selected project and hide the rest
    for (let child of mainContent[0].children) {
        let childElement = document.getElementById(`${child.id}`)
        if (childElement.id === projectContent.id) {
            childElement.style.display = 'block';
        }
        else {
            childElement.style.display = 'none';
        }
    }
};


const sidebar = sidebarModule(defaultProjectsData);
app.append(sidebar);

const sidebarMenu  = document.getElementById('sidebar');

// Invoke action for the button in the sidebar
let sidebarProjects = document.querySelectorAll('.sidebar-btn');
sidebarProjects.forEach(item => {
    item.addEventListener('click', event => {
        showProject(event);
    })
});

let customProjectsData = {}

// Collapsible Projects button
const projectsBtn = document.createElement('button');
projectsBtn.className = 'sidebar-element2 collapsible';
const projectsIcon = document.createElement('i');
projectsIcon.className = 'fa-solid fa-code-branch';
projectsBtn.appendChild(projectsIcon);
const projectsTxt = document.createElement('span');
projectsTxt.className = 'sidebar-element';
projectsTxt.textContent = 'Projects';
projectsBtn.appendChild(projectsTxt)
sidebarMenu.append(projectsBtn)

const projectsElements = document.createElement('div');
projectsElements.className = 'collapsible-content';
projectsElements.style.display = "block";

sidebarMenu.append(projectsElements);

let customProjectsContainer = document.createElement('div');
customProjectsContainer.className = 'custom-projects-container';
customProjectsContainer.id = 'custom-projects-container';
const customProjectBtn = document.createElement('button');
customProjectBtn.className = 'custom-project';
customProjectBtn.id = 'test';

const customProjectIcon = document.createElement('i');
customProjectIcon.className = 'fa-solid fa-circle';
customProjectIcon.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
const customProjectTxt = document.createElement('span');
customProjectTxt.className = 'sidebar-element';
customProjectTxt.textContent = 'Test';
customProjectBtn.appendChild(customProjectIcon);
customProjectBtn.appendChild(customProjectTxt);
customProjectsContainer.appendChild(customProjectBtn);
projectsElements.appendChild(customProjectsContainer);

// Global Event Listener
document.addEventListener('click',function(e){
    // Catch custom project clicks
    let customProjectsContainer = document.querySelectorAll('.custom-project');
    for (let element of customProjectsContainer) {
        if (e.target && e.target.id == element.id || e.target.parentElement.id == element.id){
            showProject(e);
            break
        }
    }
    // Catch edit task clicks
    let editTasks = document.querySelectorAll('#edit-task');
    for (let taskItem of editTasks) {
        // console.log(`Item: ${item}`);
        if (e.target.dataset.editId === taskItem.dataset.editId) {
            console.log(`Edit: ${e.target.dataset.editId}`);
            // Open edit form
        }
    };
    // Catch delete task clicks
    let deleteTasks = document.querySelectorAll('#delete-task');
    for (let deleteItem of deleteTasks) {
        if (e.target.dataset.deleteId === deleteItem.dataset.deleteId) {
            deleteTask(e);
        };
    };

});


projectsElements.innerHTML += `
<button type="button" class="custom-project-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i class="fa-solid fa-plus"></i>
    <span class="sidebar-element">Add Project</span>
</button>
`


projectsBtn.addEventListener('click', collapseProjects);

// Sidebar element event listener
const lis = document.querySelectorAll('li');
lis.forEach(li =>{
    li.addEventListener('click', getSection)
});


// MAIN SECTION
const mainSection = document.createElement('div');
mainSection.id = "main"
// Content of the main section
const contentElement = document.createElement('div');
contentElement.className = 'content';
contentElement.id = 'content';

mainSection.append(contentElement);
app.append(mainSection);


// Create Project Modal
mainSection.innerHTML+=`
<form class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Project</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label>Name:</label>
        <input class="form-control" type="text" name="" id="project-name-text-input">
        <div id="project-msg"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" id="add-project">Add Project</button>
      </div>
    </div>
  </div>
</form>
`

// Create Task Modal
mainSection.innerHTML+=`
<form class="modal fade" id="task-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
            <label>Name: </Label>
            <input class="form-control" type="text" name="" id="task-name-input">
            <div id="task-msg">
            </div>
        </div>
        <div class="mb-3">
            <label>Due Date: </label>
            <input class="form-control" type="date" name="" id="task-date-input">
        </div>
        <div class="mb-3">
            <label>Description: </label>
            <textarea class="form-control"  name="" id="task-description" cols="30" rows="5"></textarea>
        </div>
        <div class="mb-3">
            <label>Priority: </label>
            <select id="task-priority" class="form-select" aria-label="Default select priority">
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select> 
        </div>
        <div class="mb-3">
            <label>Project: </label>
            <select id="task-project" class="form-select project-select" aria-label="Default select project">
            </select>     
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" id="add-task">Add Task</button>
      </div>
    </div>
  </div>
</form>
`

// Edit Task Modal
mainSection.innerHTML+=`
<form class="modal fade" id="edit-task-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
            <label>Name: </Label>
            <input class="form-control" type="text" name="" id="edit-task-name-input">
            <div id="edit-task-msg">
            </div>
        </div>
        <div class="mb-3">
            <label>Due Date: </label>
            <input class="form-control" type="date" name="" id="edit-task-date-input">
        </div>
        <div class="mb-3">
            <label>Description: </label>
            <textarea class="form-control"  name="" id="edit-task-description" cols="30" rows="5"></textarea>
        </div>
        <div class="mb-3">
            <label>Priority: </label>
            <select id="edit-task-priority" class="form-select" aria-label="Default select priority">
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select> 
        </div>
        <div class="mb-3">
            <label>Project: </label>
            <select id="edit-task-project" class="form-select project-select" aria-label="Default select project">
            </select>     
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" id="update-task">Update Task</button>
      </div>
    </div>
  </div>
</form>
`
// TODO-1 - add new form
// Associate it with the edit button - add event listener, move task
// TODO-2 - delete project 
// TODO-3 - delete task

let projectModal = document.getElementById('exampleModal');
let projectMsg = document.getElementById('project-msg');
let projectNameTextInput = document.getElementById('project-name-text-input');
let addProject = document.getElementById('add-project');
let customPrjContainer = document.getElementById('custom-projects-container');
let content = document.getElementById('content');
let taskModal = document.getElementById('task-modal');
let taskNameInput = document.getElementById('task-name-input');
let taskDateInput = document.getElementById('task-date-input');
let taskDescription = document.getElementById('task-description');
let taskPriority = document.getElementById('task-priority');
let taskProject = document.getElementById('task-project');
let addTask = document.getElementById('add-task');
let taskMsg = document.getElementById('task-msg');

// Project and task stores
let projectsData = []
let tasksData = []


let projectFormValidation = () => {
    if (projectNameTextInput.value === "") {
        projectMsg.innerHTML = "Project name is required.";
    }
    else if (projectNameTextInput.value === "Test") {
        projectMsg.innerHTML = "Project already exists. Choose different name."
    }
    else {
        projectMsg.innerHTML = "";
        acceptProjectData();
        addProject.setAttribute("data-bs-dismiss", 'modal');
        addProject.click();
        
        (() => {
            addProject.setAttribute("data-bs-dismiss", '');
        })();
    }
};


let taskFormValidation = () => {
    if (taskNameInput.value === "") {
        taskMsg.innerHTML = 'Task name is required.'
    }
    else {
        taskMsg.innerHTML = "";
        acceptTaskData();
        addTask.setAttribute("data-bs-dismiss", 'modal');
        addTask.click();
        
        (() => {
            addTask.setAttribute("data-bs-dismiss", '');
        })();
    }
};


let acceptTaskData = () => {    
    let taskEnteredPriority = "Low";
    if (taskPriority.value === "2") {
        taskEnteredPriority = "Medium";
    }
    else if (taskPriority.value === "3") {
        taskEnteredPriority = "High";
    }
    let taskUUID = uuidv4();
    console.log(`Task: ${taskUUID}`)
    tasksData.push({
        id: taskUUID,
        name: taskNameInput.value,
        date: taskDateInput.value,
        description: taskDescription.value,
        priority: taskEnteredPriority,
        project: taskProject.value
    });
    localStorage.setItem("tasksData", JSON.stringify(tasksData));
    for (let element of projectsData) {
        if (element.id === taskProject.value) {
            element["tasks"].push(taskUUID);
        }
    }
    localStorage.setItem("projectsData", JSON.stringify(projectsData));
    createTasks();
    resetTaskForm();
};


let acceptProjectData = () => {
    projectsData.push({
        id: uuidv4(),
        name: projectNameTextInput.value,
        icon: "",
        tasks: []
    });
    localStorage.setItem("projectsData", JSON.stringify(projectsData));
    createProjectButton();
    createProject();
};


let createProjectButton = () => {
    customPrjContainer.innerHTML = "";
    projectsData.map((x, y) => {
        // Skip creating inbox button
        if (x.name !== "Inbox" && x.name !== "Today") {
            return (customPrjContainer.innerHTML +=
                `
                <button class="custom-project ${y}" id="${x.name.toLowerCase()}">
                    <i class="fa-solid fa-circle" style="color: rgb(131, 229, 77);"></i>
                    <span class="sidebar-element">${x.name}</span>
                </button>
                `
            )
        };
        
    });
};


let createProject = () => {
    content.innerHTML = "";
    projectsData.map((x, y) => {
        if (x.name !== "Inbox" && x.name !== "Today" ) {
            return (content.innerHTML += 
                `
                <div id="${x.name.toLowerCase()}-project" class="custom-project-${y}" style="display: none;">
                    <div class="content-header">
                        <i class="true"></i>
                        <span class="content-header-text"> ${x.name}</span>
                    </div>
                    <button type="button" class="btn new-task-btn" data-bs-toggle="modal" data-bs-target="#task-modal">
                        <i class="fa-solid fa-plus new-task-icon"></i>
                        <span class="new-task-btn-text">New Task</span>
                    </button>
                    <div id="${x.name.toLowerCase()}-project-tasks">
                    </div>
                </div>
                `
            );   
        }
        else {
            return (content.innerHTML +=
                `
                <div id="${x.name.toLowerCase()}-project" class="default-project-${y}" style="display: none;">
                    <div class="content-header">
                        <i class="${x.icon}"></i>
                        <span class="content-header-text"> ${x.name}</span>
                    </div>
                    <button type="button" class="btn new-task-btn" data-bs-toggle="modal" data-bs-target="#task-modal">
                        <i class="fa-solid fa-plus new-task-icon"></i>
                        <span class="new-task-btn-text">New Task</span>
                    </button>
                    <div id="${x.name.toLowerCase()}-project-tasks">
                    </div>
                </div>
                `
            );
        }  
    });
    resetProjectForm();
    taskProject.innerHTML = "";
    projectsData.map((x, y) => {
        if (x.name !== "Today") {
            return(
                taskProject.innerHTML += 
                `
                <option value="${x.id}">${x.name}</option>
                `
            );
        }
    });
};


let createTasks = () => {
    for (let project of projectsData) {
        let projectName = project["name"].toLowerCase();
        let projectTasks = document.getElementById(`${projectName}-project-tasks`);
        projectTasks.innerHTML = "";
        for (let task of project["tasks"]) {
            tasksData.map((x, y) => {
                if (task === x.id) {
                    return (projectTasks.innerHTML += 
                        `
                        <div id="${x.id}">
                            <div class="card-task">
                                <input type="checkbox" id="task-checkbox">
                                <div id="task-metadata" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTask-${x.id}" aria-expanded="false" aria-controls="collapseTask-${x.id}">
                                    <span class="fw-bold">${x.name}</span>
                                    <span class="small text-secondary">${x.description}</span>
                                    <span class="date-text">${x.date}</span>
                                </div>
                                <span class="options">
                                    <i class="fas fa-flag ${x.priority.toLowerCase()}"></i>
                                    <i class="fas fa-edit" id="edit-task" data-edit-id="${y}"></i>
                                    <i class="fas fa-trash-alt" id="delete-task" data-delete-id="${y}"></i>
                                </span>
                            </div>
                            <div class="collapse" id="collapseTask-${x.id}">
                                <div class="card card-body">
                                    <div class="left">
                                        <span><strong>Name: </strong>${x.name}</span>
                                        <span><strong>Description: </strong>${x.description}</span>
                                    </div>
                                    <div class="right">
                                        <span><strong>Due date: </strong>${x.date}</span>
                                        <span><strong>Priority: </strong>${x.priority}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    ); 
                };
            });
        };
    };
};


let deleteTask = (e) => {
    let selectedTask = e.target.parentElement.parentElement.parentElement;
    tasksData.splice(selectedTask.id, 1);
    localStorage.setItem("tasksData", JSON.stringify(tasksData));
    for (let project of projectsData) {
        for (let task of project.tasks) {
            if (task === selectedTask.id) {
                project.tasks.splice(selectedTask.id, 1);
            };
        };
    localStorage.setItem("projectsData", JSON.stringify(projectsData));   
    };
    selectedTask.remove();
};


let resetProjectForm = () => {
    projectNameTextInput.value = "";
}


let resetTaskForm = () => {
    taskNameInput.value = "";
    taskDateInput.value = ""; 
    taskDescription.value = "";
    taskPriority.value = "";
    taskProject.value = "";
};


// FOOTER SECTION
const footerSection = document.createElement('footer');
footerSection.className = 'footer';
footerSection.innerHTML = 'Copyright © Lukasz 2022 <a href="#"><i class="fa-brands fa-github footer-icon"></i></a>'
app.append(footerSection);


// TODO-4:
// You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.

// TODO-5:
// The look of the User Interface is up to you, but it should be able to do the following:
// a. view all projects
// b. view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
// c. expand a single todo to see/edit its details
// d. delete a todo
(() => {
    projectsData = JSON.parse(localStorage.getItem("projectsData")) || [{id: uuidv4(), name: "Inbox", icon: "fa-solid fa-inbox", tasks: []}, {id: uuidv4(), name: "Today", icon: "fa-solid fa-calendar-day", tasks: []}];
    tasksData = JSON.parse(localStorage.getItem("tasksData")) || [];
    createProjectButton();
    createProject();
    createTasks();
    let inbox = document.getElementById('inbox-project');
    inbox.style.display = "block";

})();

projectModal.addEventListener('submit', (e)=>{
    e.preventDefault();
    projectFormValidation();
})

taskModal.addEventListener('submit', (e)=>{
    e.preventDefault();
    taskFormValidation();
})
