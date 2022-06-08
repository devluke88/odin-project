import { addImage } from './imageGenerator'

// Hero module
const heroModule = (heroHeaderText, heroSecText, buttonText, image) => {
    const hero = document.createElement('div');
    hero.id = 'hero';

    const heroMain = document.createElement('div');
    heroMain.className = 'hero-main custom-mg';

    const heroText = document.createElement('div');
    heroText.className = 'hero-text';

    const heroHeader = document.createElement('div');
    heroHeader.className = 'hero-header';
    heroHeader.textContent = heroHeaderText;
    heroText.appendChild(heroHeader);

    const heroSecondaryText = document.createElement('div');
    heroSecondaryText.className = 'hero-secondary-text';
    heroSecondaryText.textContent = heroSecText;
    heroText.appendChild(heroSecondaryText);

    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = buttonText;
    heroText.appendChild(button);

    heroMain.appendChild(heroText);

    const heroImage = document.createElement('div');
    heroImage.className = 'hero-image';
    const imageElement = addImage(image);
    heroImage.appendChild(imageElement);

    heroMain.appendChild(heroImage);
    hero.appendChild(heroMain);

    return hero;
};

export { heroModule };