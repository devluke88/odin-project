import './style.css';
import { projectModule } from './project'
import { sidebarModule } from './sidebar'


let todoList = [];

// TODO-3:
// Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

// Function to display given selected section
// function getSection(e) {
//     e.preventDefault();
//     const clickedBtn = e.target.textContent.toLowerCase()
//     if (clickedBtn !== 'home') {
//         const element = document.getElementById(clickedBtn);
//         for (let i = 0; i < componentsList.length; i++) {
//             componentsList[i].style.display = 'none';
//         }
//         element.style.display = 'flex';
//         element.style.flex = '1 1 auto';
//         element.style.justifyContent = 'center';
//     }
//     else {
//         window.location.reload();
//     }
// };

//Function to restart the page
// function takeMeHome(e) {
//     e.preventDefault();
//     window.location.reload();
// }

// Array with sidebar menu components
const componentsList = [
    {name: 'Inbox', icon: 'fa-solid fa-inbox' },
    {name: 'All', icon: 'fa-solid fa-list' },
    {name: 'Today', icon: 'fa-solid fa-calendar-day' },
    {name: 'Projects', icon: 'fa-solid fa-code-branch' },
    {name: 'Completed', icon: 'fa-solid fa-circle-check' }
]
// Start here - read wrap element
const wrapElement = document.querySelector('.wrap');


// SIDEBAR SECTION

// const sidebar = navModule('Luca', 'Home', 'Menu', 'About', 'Contact');
const sidebar = sidebarModule(componentsList);
wrapElement.append(sidebar);

// Sidebar element event listener
// const lis = document.querySelectorAll('li');
// lis.forEach(li =>{
//     li.addEventListener('click', getSection)
// });

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

mainSection.append(contentElement)
wrapElement.append(mainSection);

// Projects Section
// Add functionality to Projects button to display different projects, add dummy one

// Footer Section
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