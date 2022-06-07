// About Section
import { addImage } from './imageGenerator'

const aboutModule = (image, aboutHeaderText, aboutSecText) => {
    const about = document.createElement('div');
    about.id = 'about';

    const aboutMain = document.createElement('div');
    aboutMain.className = 'about-main custom-mg';

    const aboutImage = document.createElement('div');
    aboutImage.className = 'about-image';
    const imageElement = addImage(image);
    aboutImage.appendChild(imageElement);

    aboutMain.appendChild(aboutImage);


    const aboutText = document.createElement('div');
    aboutText.className = 'about-text';

    const aboutHeader = document.createElement('div');
    aboutHeader.className = 'about-header';
    aboutHeader.textContent = aboutHeaderText;
    aboutText.appendChild(aboutHeader);

    const aboutSecondaryText = document.createElement('div');
    aboutSecondaryText.className = 'about-secondary-text';
    aboutSecondaryText.textContent = aboutSecText;
    aboutText.appendChild(aboutSecondaryText);

    aboutMain.appendChild(aboutText);

    
    about.appendChild(aboutMain);

    return about;
};

export { aboutModule };
