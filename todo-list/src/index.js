import './style.css';
import { projectModule } from './project'
import { sidebarModule } from './sidebar'
import { navbarModule } from './navbar'


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
const componentsList = [
    {name: 'Inbox', icon: 'fa-solid fa-inbox'},
    {name: 'All', icon: 'fa-solid fa-list'},
    {name: 'Today', icon: 'fa-solid fa-calendar-day'},
    // {name: 'Projects', icon: 'fa-solid fa-code-branch'},
    {name: 'Completed', icon: 'fa-solid fa-circle-check'}
]

// Wrapper element, everything starts here
const wrapElement = document.querySelector('.wrap');


// NAV SECTION
const logoIcon = 'fa-solid fa-check-double';
const logoText = 'todoList';
const navbar = navbarModule(logoIcon, logoText)
wrapElement.append(navbar);
// Reload page when clicked on logo
const logoElement = document.querySelector('.logo-element')
logoElement.addEventListener('click', takeMeHome)



// SIDEBAR SECTION

function openProjects() {
    console.log('Opened!');
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}

let projectsList = ['Inbox', 'Completed'];

const sidebar = sidebarModule(componentsList);
wrapElement.append(sidebar);

const sidebarMenu  = document.querySelector('#sidebar');
// Projects button
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
const customProjectBtn = document.createElement('button');
customProjectBtn.className = 'custom-project';
const customProjectIcon = document.createElement('i');
customProjectIcon.className = 'fa-solid fa-circle';
customProjectIcon.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`
const customProjectTxt = document.createElement('span');
customProjectTxt.className = 'sidebar-element';
customProjectTxt.textContent = 'Test';
customProjectBtn.appendChild(customProjectIcon);
customProjectBtn.appendChild(customProjectTxt);
projectsElements.append(customProjectBtn);
// Add Project Button
const addProjectBtn = document.createElement('button');
addProjectBtn.className = 'custom-project-button';
const addCustomProjectIcon = document.createElement('i');
addCustomProjectIcon.className = 'fa-solid fa-plus';
addProjectBtn.appendChild(addCustomProjectIcon);
const addCustomProjectText = document.createElement('span');
addCustomProjectText.className = 'sidebar-element';
addCustomProjectText.textContent = 'Add Project';
addProjectBtn.appendChild(addCustomProjectText);
projectsElements.append(addProjectBtn);

// Add Project modal
const addProjectModal = document.createElement('div');
addProjectModal.id = 'project-modal';
const addProjectModalContent = document.createElement('div');
addProjectModalContent.className = 'modal-content';
// addProjectModalContent.style.display = 'flex';
// addProjectModalContent.style.flexDirection = 'column';
addProjectModal.appendChild(addProjectModalContent);
// Close Button
const closeBtn = document.createElement('span');
closeBtn.className = 'close-button';
closeBtn.innerHTML = '&times';
addProjectModalContent.appendChild(closeBtn)
function closeWindow() {
    const modal = document.querySelector('#project-modal');
    modal.style.display = "none";
}
closeBtn.addEventListener('click', closeWindow);
// Text Content
const addProjectModalHeader = document.createElement('p');
addProjectModalHeader.className = 'add-project-modal-header';
addProjectModalHeader.textContent = 'Provide a new project name.'
// Form
const addProjectModalForm = document.createElement('form');
addProjectModalForm.className = 'add-project-modal-form';
// Label
const addProjectModalLabel = document.createElement('label');
addProjectModalLabel.for = 'project-name';
addProjectModalLabel.textContent = "Project Name";
addProjectModalForm.appendChild(addProjectModalLabel);
// Input textbox
const addProjectModalInput = document.createElement('input');
addProjectModalInput.type = 'text';
addProjectModalInput.id = 'project-name';
addProjectModalInput.name = 'project-name';
addProjectModalInput.placeholder = 'Your Project';
addProjectModalForm.appendChild(addProjectModalInput);
// Add/submit Button
const addProjectModalSubmitBtn = document.createElement('input');
addProjectModalSubmitBtn.type = 'submit';
addProjectModalSubmitBtn.value = 'Add';
addProjectModalForm.appendChild(addProjectModalSubmitBtn);
addProjectModalContent.appendChild(addProjectModalForm)
// Modal functionality
// Get the modal
function showProjectModal() {
    const modal = document.querySelector('#project-modal')
    modal.style.display = "block";
}
// var modal = document.getElementById("project-modal");
addProjectBtn.addEventListener('click', showProjectModal)
// // Get the button that opens the modal
// var btn = document.getElementByClassName("custom-project-button");

// document.getElementByClassName

// // Get the <span> element that closes the modal
// var span = document.getElementByClassName("close-button");

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    const modal = document.querySelector('#project-modal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




projectsBtn.addEventListener('click', openProjects)
// Add project button

// projectBtnContainer.className = 'project-bt';

// Add new element to the project list
// projectsList.push(projectName)
// Add new element to the sidebar list




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
// Inbox Section
const inboxSection = projectModule('Inbox', 'fa-solid fa-inbox', true);
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

mainSection.append(contentElement);
wrapElement.append(mainSection);
mainSection.append(addProjectModal)


// FOOTER SECTION
const footerSection = document.createElement('footer');
footerSection.className = 'footer';
footerSection.innerHTML = 'Copyright © Lukasz 2022 <a href="#"><i class="fa-brands fa-github footer-icon"></i></a>'
wrapElement.append(footerSection);


// TODO-4:
// You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.

// TODO-5:
// The look of the User Interface is up to you, but it should be able to do the following:
// a. view all projects
// b. view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
// c. expand a single todo to see/edit its details
// d. delete a todo

// TODO-6
// For inspiration, check out the following great todo apps. (look at screenshots, watch their introduction videos etc.)
// Todoist
// Things
// any.do

// TODO-7 Add image under add task when there is no tasks