// Navbar module
const navModule = (logoName, ...navElements) => {
    const elements = [...navElements]
    const navbar = document.createElement('div');
    navbar.id = 'navbar';

    const nav = document.createElement('div');
    nav.className = 'nav nav-mg';

    const logo = document.createElement('div');
    logo.textContent = logoName;
    logo.className = "logo";
    nav.appendChild(logo);

    const ul = document.createElement('ul');
    
    for (let element of elements) {
        const li = document.createElement('li');
        let newChild = ''
        if (element == 'Home') {
            newChild = `<a href="#">${element}</a>`;
        }
        else {
            newChild = `<a href="#${element.toLowerCase()}">${element}</a>`;
        }
        li.innerHTML = newChild;
        ul.appendChild(li);
    };

    nav.appendChild(ul);
    navbar.appendChild(nav);
    

    return navbar;
};

export { navModule };