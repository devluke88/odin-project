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
import { aboutModule } from './about';
import { contactModule } from './contact';
import { menuModule } from './menu';

const cardImagesList = [
    {
        'image': Pizza1,
        'price': '$15',
        'pizza': 'Americana',
        'desc': 'Tomato base with cheese, olives and meat'
    }, 
    {
        'image': Pizza2,
        'price': '$12',
        'pizza': 'Vegana',
        'desc': 'Tomato base with vegan cheese and oregano'
    }, 
    {
        'image': Pizza3,
        'price': '$14',
        'pizza': 'Oniona',
        'desc': 'Tomato base with mozzarella, onion, mashrooms and peppers'
    }, 
    {
        'image': Pizza4,
        'price': '$10',
        'pizza': 'Margerhita',
        'desc': 'Tomato base with mozzarella and basil'
    }, 
    {
        'image': Pizza5,
        'price': '$12',
        'pizza': 'Margerhita Bufalla',
        'desc': 'Tomato base with buffalo mozzarella and basil'
    }, 
    {
        'image': Pizza6,
        'price': '$10',
        'pizza': 'Romana',
        'desc': 'Thick, crusty base with cheese and basil'
    }, 
    {
        'image': Pizza7,
        'price': '$20',
        'pizza': 'Meatana',
        'desc': 'Classic base wiht chese, peppers, meat mix and oregano'
    }, 
    {
        'image': Pizza8,
        'price': '$19',
        'pizza': 'Beacona',
        'desc': 'Tomato base with mozzarella and beacon'
    }
]

// Grab content
const content = document.getElementById('content');

// Navbar Section
const navbar = navModule('Luca', 'Home', 'Menu', 'About', 'Contact');
content.append(navbar);

// Hero Section
const heroHeaderText = 'Best Pizza!';
const heroSecText = 'We serve the best Neapolitan pizza accross the whole UK. All of our dough is made from fresh ingredients on the daily basis. Source of all goodness is Italy that offer the best food in the world. The best crust you will ever try.';
const buttonText = 'Try Now';
const hero = heroModule(heroHeaderText, heroSecText, buttonText, MainImage);
content.append(hero);

// Menu Section
const menu = menuModule(cardImagesList);
content.append(menu);

// About Section
const aboutHeaderText = 'About us';
const aboutSecText = 'We are small Italian family, owning ten restaurants accross the UK. We serve our community by delivering the best food in the World! We started this business to share the love and spread the kindnest by serving other people. We welcome everyone in our place. Do not hesitate to visit us!';
const about = aboutModule(AboutImage, aboutHeaderText, aboutSecText);
content.append(about);

// Contact Section
function submitForm(e) {
    e.preventDefault();
    alert('Email sent!')
}

const contact = contactModule('Contact us');
content.append(contact);
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

// Footer Section
const footer = document.createElement('div');
footer.className = 'footer';
footer.textContent = 'Copyright © Lukasz';
content.append(footer);
