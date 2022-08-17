import './style.css';
import { projectModule, customProject } from './project'
import { sidebarModule } from './sidebar'
import { navbarModule } from './navbar'
// import { modalModule } from './modal'

let todoList = [];

// TODO-3:
// Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

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
    console.log('Opened!');
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
    console.log('Show project');
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
        console.log(child)
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

// let createProjects = () => {
//     tasks.innerHTML = "";
//     data.map((x, y) => {
//         return (tasks.innerHTML += 
//             `
//             <div id=${y}>
//                 <span class="fw-bold">${x.text}</span>
//                 <span class="small text-secondary">${x.date}</span>
//                 <p>${x.description}</p>
//                 <span class="options">
//                     <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
//                     <i onClick="deleteTask(this);createTasks(this)" class="fas fa-trash-alt"></i>
//                 </span>
//             </div>
//             `)
//     });
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
    let customProjectsContainer = document.querySelectorAll('.custom-project');
    for (let element of customProjectsContainer) {
        if (e.target && e.target.id == element.id || e.target.parentElement.id == element.id){
            console.log('YES CORRECT');
            showProject(e);
            break
        }
    }
    // Also working function //
    // if(e.target && e.target.id == 'test' || e.target.parentElement.id == 'test'){
    //     console.log("HEY")  
    //     showProject(e);
    //  }
});

// const addProjectBtn = document.createElement('button');
// addProjectBtn.className = 'custom-project-button';
// addProjectBtn.type = "button";
// const addCustomProjectIcon = document.createElement('i');
// addCustomProjectIcon.className = 'fa-solid fa-plus';
// addProjectBtn.appendChild(addCustomProjectIcon);
// const addCustomProjectText = document.createElement('span');
// addCustomProjectText.className = 'sidebar-element';
// addCustomProjectText.textContent = 'Add Project';
// addProjectBtn.appendChild(addCustomProjectText);
// projectsElements.append(addProjectBtn);
projectsElements.innerHTML += `
<button type="button" class="custom-project-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i class="fa-solid fa-plus"></i>
    <span class="sidebar-element">Add Project</span>
</button>
`
// <!-- Button trigger modal -->
/* 
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> 
*/



// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     const modal = document.querySelector('#project-modal');
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

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
// Inbox Section
const inboxSection = projectModule('Inbox', 'fa-solid fa-inbox', true);
inboxSection.style.display = "block";
contentElement.append(inboxSection);
// All Section
const allSection = projectModule('All', 'fa-solid fa-list', true);
allSection.style.display = 'none';
contentElement.append(allSection);
// Today Section
const todaySection = projectModule('Today', 'fa-solid fa-calendar-day', true);
todaySection.style.display = 'none';
contentElement.append(todaySection);
// Completed Section
const completedSection = projectModule('Completed', 'fa-solid fa-circle-check', true);
completedSection.style.display = 'none';
contentElement.append(completedSection);
// Projects Section
// Add functionality to Projects button to display different projects, add dummy one
const testSection = projectModule('Test', true);
testSection.style.display = 'none';
contentElement.append(testSection);

mainSection.append(contentElement);
app.append(mainSection);



// Project Modal
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

// Todo Modal
mainSection.innerHTML+=`
<form class="modal fade" id="taskModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <input class="form-control" type="date" name="" id="taskDateInput">
        </div>
        <div class="mb-3">
            <label>Description: </label>
            <textarea class="form-control"  name="" id="taskTextarea" cols="30" rows="5"></textarea>
        </div>
        <div class="mb-3">
            <label>Priority: </label>
            <select class="form-select" aria-label="Default select priority">
                <option selected value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select> 
        </div>
        <div class="mb-3">
            <label>Project: </label>
            <select class="form-select project-select" aria-label="Default select project">
                <option selected value="1">Inbox</option>
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

let projectModal = document.getElementById('exampleModal');
let projectMsg = document.getElementById('project-msg');
let projectNameTextInput = document.getElementById('project-name-text-input');
let addProject = document.getElementById('add-project');
let customPrjContainer = document.getElementById('custom-projects-container');
let content = document.getElementById('content');
let taskModal = document.getElementById('taskModal');
let taskNameInput = document.getElementById('task-name-input');
let addTask = document.getElementById('add-task');
let taskMsg = document.getElementById('task-msg');

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
// TODO: Finish accept data
let acceptTaskData = () => {
    console.log("task data accepted");
    console.log(taskNameInput.value)
    // projectsData.push({
    //     name: projectNameTextInput.value,
    //     tasks: []
    // });
    // localStorage.setItem("projectsData", JSON.stringify(projectsData));
    // createProjectButton();
    // createProject();
};

let defaultProjectsDataStore = [
    {name: 'Inbox', icon: 'fa-solid fa-inbox', tasks: []},
    {name: 'Today', icon: 'fa-solid fa-calendar-day'}
]

let projectsData = []

let acceptProjectData = () => {
    console.log("data accepted");
    console.log(projectNameTextInput.value)
    projectsData.push({
        name: projectNameTextInput.value,
        tasks: []
    });
    localStorage.setItem("projectsData", JSON.stringify(projectsData));
    createProjectButton();
    createProject();
};

let createProjectButton = () => {
    customPrjContainer.innerHTML = "";
    console.log(`Project data: ${projectsData}`)
    projectsData.map((x, y) => {
        console.log(`X: ${x.name}`)
        return (customPrjContainer.innerHTML +=
            `
            <button class="custom-project ${y}" id="${x.name.toLowerCase()}">
                <i class="fa-solid fa-circle" style="color: rgb(131, 229, 77);"></i>
                <span class="sidebar-element">${x.name}</span>
            </button>
            `
        )
    });
};

let createProject = () => {
    content.innerHTML = "";
    defaultProjectsDataStore.map((x, y) =>{
        console.log(`Project x: ${x.name}`)
        return (content.innerHTML +=
            `
            <div id="${x.name.toLowerCase()}-project" class="default-project-${y}" style="display: none;">
                <div class="content-header">
                    <i class="${x.icon}"></i>
                    <span class="content-header-text"> ${x.name}</span>
                </div>
                <button type="button" class="new-task-btn" data-bs-toggle="modal" data-bs-target="#taskModal">
                    <i class="fa-solid fa-plus new-task-icon"></i>
                    <span class="new-task-btn-text">New Task</span>
                </button>
            </div>
            `
        )
    });
    projectsData.map((x, y) => {
        console.log(`Project x: ${x.name}`)
        return (content.innerHTML += 
            `
            <div id="${x.name.toLowerCase()}-project" class="custom-project-${y}" style="display: none;">
                <div class="content-header">
                    <i class="true"></i>
                    <span class="content-header-text"> ${x.name}</span>
                </div>
                <button type="button" class="new-task-btn" data-bs-toggle="modal" data-bs-target="#taskModal">
                    <i class="fa-solid fa-plus new-task-icon"></i>
                    <span class="new-task-btn-text">New Task</span>
                </button>
            </div>
            `
        )
    });
    
    resetProjectForm();
};

let resetProjectForm = () => {
    projectNameTextInput.value = "";
}



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
    projectsData = JSON.parse(localStorage.getItem("projectsData")) || [];
    createProjectButton();
    createProject();
    console.log(projectsData);
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