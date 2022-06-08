// Menu Section
import { addImage } from './imageGenerator'

const menuModule = (images) => {
    let imagesArray = [...images];
    // let imegesArray = Object.assign({}, images);
    const menu = document.createElement('div');
    menu.id = 'menu';

    const menuHeader = document.createElement('div');
    menuHeader.className = 'menu-header';
    menuHeader.textContent = 'Menu';
    menu.appendChild(menuHeader);

    // Cards
    const cards = document.createElement('div');
    cards.className = 'cards';
    
    for(let i = 0; i < imagesArray.length; i++) {
        let card =  document.createElement('div');
        card.className = "card";
        // Menu Image
        let cardImage = document.createElement('div');
        cardImage.className = 'card-image';
        let imageElement = addImage(imagesArray[i]['image']);
        cardImage.appendChild(imageElement);
        card.appendChild(cardImage);
        // Card Body
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        // Card Title
        let cardTitle = document.createElement('div');
        cardTitle.className = 'card-title';
        // Card header
        let cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.textContent = imagesArray[i]['pizza']
        cardTitle.appendChild(cardHeader)
        // Card Price
        let cardPrice = document.createElement('div');
        cardPrice.className = 'card-price';
        cardPrice.textContent = imagesArray[i]['price']
        cardTitle.appendChild(cardPrice)
        cardBody.appendChild(cardTitle);
        // Card hr
        let cardHr = document.createElement('div');
        cardHr.className = 'card-hr';
        cardBody.appendChild(cardHr)
        //Card Description
        let cardDescription = document.createElement('div');
        cardDescription.className = 'card-description';
        cardDescription.textContent = imagesArray[i]['desc'];
        cardBody.appendChild(cardDescription);

        card.appendChild(cardBody);
        cards.appendChild(card);
    };

    menu.appendChild(cards);
    return menu;
};

export { menuModule };