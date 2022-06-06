import './style.css';
import MainImage from './main.jpg';
import AboutImage from './about.jpg';
import Pizza1 from './pizza1.jpg';
import Pizza2 from './pizza2.jpg';
import Pizza3 from './pizza3.jpg';
import Pizza4 from './pizza4.jpg';
import Pizza5 from './pizza5.jpg';
import Pizza6 from './pizza6.jpg';
import Pizza7 from './pizza7.jpg';
import Pizza8 from './pizza8.jpg';

// import modules
import { navModule } from './navbar';
import { heroModule } from './hero';

const cardImagesList = [Pizza1, Pizza2, Pizza3, Pizza4, Pizza5, Pizza6, Pizza7, Pizza8]

function addImage(imageName) {
    const newImage = new Image();
    newImage.src = imageName;

    return newImage;
}

// function app() {

// }

 
const content = document.getElementById('content');
// console.log(navModule('Test', 'Home', 'Test1', 'Test2'));
// content.appendChild(app());

// Navbar Section
const navbar = navModule('Luca', 'Home', 'Menu', 'About', 'Contact');
content.append(navbar);
// content.insertBefore(navbar, content.firstChild);

// Hero Section
// Add Hero Image
// const herroImage = document.querySelector('.hero-image');
const heroHeaderText = 'Best Pizza!';
const heroSecText = 'We serve the best Neapolitan pizza accross the whole UK. All of our dough is made from fresh ingredients on the daily basis. Source of all goodness is Italy that offer the best food in the world. The best crust you will ever try.';
const buttonText = 'Try Now';
const hero = heroModule(heroHeaderText, heroSecText, buttonText, MainImage);
content.append(hero);
// content.insertBefore(hero, content.nthChild(2));
// herroImage.appendChild(addImage(MainImage));

// Add Menu Images
const cardImages = document.querySelectorAll('.card-image');
let count = 0;
cardImages.forEach((cardImage) => {
    console.log(cardImagesList[count]);
    cardImage.appendChild(addImage(cardImagesList[count]));
    count++;
});

// Add About Image
const aboutImage = document.querySelector('.about-image');
aboutImage.appendChild(addImage(AboutImage));

// Contact Section
function submitForm(e) {
    e.preventDefault();
    alert('Email sent!')
}
const form = document.querySelector('.form');
form.addEventListener('submit', submitForm);

//Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is. It’s okay to hard-code these into the HTML for now just to see how they look on the page.