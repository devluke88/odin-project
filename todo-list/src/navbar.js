// Navbar module
const navbarModule = (icon, text) => {
    const navbar = document.createElement('div');
    navbar.className = 'nav';
    const logoElement = document.createElement('div');
    logoElement.className = 'logo-element';
    logoElement.style.display = 'flex';
    const logoIcon = document.createElement('div');
    logoIcon.className = icon;
    logoElement.appendChild(logoIcon);
    const logoText = document.createElement('div');
    logoText.className = 'nav-logo';
    logoText.textContent = text;
    logoElement.appendChild(logoText)
    navbar.appendChild(logoElement)
    return navbar;
};

export { navbarModule };