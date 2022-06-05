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

const cardImagesList = [Pizza1, Pizza2, Pizza3, Pizza4, Pizza5, Pizza6, Pizza7, Pizza8]

function component() {
    const image = document.querySelector('.image');
    const mainImage = new Image();
    mainImage.src = MainImage;

    image.appendChild(mainImage);

}

function addImage(imageName) {
    const newImage = new Image();
    newImage.src = imageName;

    return newImage;
}

// const content = document.getElementById('content');
// content.appendChild(component());

// Add Hero Image
const herroImage = document.querySelector('.hero-image');
herroImage.appendChild(addImage(MainImage));

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

//Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is. It’s okay to hard-code these into the HTML for now just to see how they look on the page.