
const modalModule = (modalName, headerText) => {
    // Parent Element
    const element = document.createElement('div');
    element.id = `${modalName}-modal`;
    
    // Modal Content
    const modalContent = document.createElement('div');
    modalContent.className = `${modalName}-modal-content`;
    modalContent.style.borderRadius = '5px'
    // Modal Top Panel
    const modalTopPanel = document.createElement('div');
    modalTopPanel.id = `${modalName}-modal-top-panel`;
    modalTopPanel.style.display = 'flex';
    modalTopPanel.style.justifyContent = 'space-between';
    modalTopPanel.style.alignItems = 'flex-end';
    modalTopPanel.style.padding = '10px 20px';
    modalTopPanel.style.paddingBottom = '0px';
    // Header
    const modalHeader = document.createElement('h5');
    modalHeader.className = `${modalName}-modal-header`;
    modalHeader.textContent = `${headerText}`;
    modalTopPanel.appendChild(modalHeader);
    // Close Button
    const closeBtn = document.createElement('span');
    closeBtn.className = `${modalName}-close-button`;
    closeBtn.style.alignSelf = 'flex-start';
    closeBtn.innerHTML = '&times';
    modalTopPanel.appendChild(closeBtn);
    modalContent.appendChild(modalTopPanel);
    // HR
    const spaceBar = document.createElement('hr');
    modalContent.appendChild(spaceBar);
    // Form
    const modalForm = document.createElement('form');
    modalForm.class = `${modalName}-modal-form`;
    modalForm.style.display = 'flex';
    modalForm.style.flexDirection = 'column';
    modalForm.style.padding = '20px';
    modalForm.style.paddingTop = '0px';
    modalForm.style.gap = '10px';
    // Label
    const modalLabel = document.createElement('div');
    modalLabel.for = `${modalName}-name`;
    modalLabel.textContent = 'Name:';
    modalForm.appendChild(modalLabel);
    // Input textbox
    const modalInput = document.createElement('input');
    modalInput.type = 'text';
    modalInput.id = `${modalName}-name`;
    modalInput.name = `${modalName}-name`;
    modalForm.appendChild(modalInput);
    // Create Button
    const buttonContainer = document.createElement('div');
    buttonContainer.style.padding = '0px 20px 20px 20px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.gap = '10px';
    const modalCloseBtn = document.createElement('button');
    modalCloseBtn.className = `${modalName}-modal-close-button`;
    modalCloseBtn.textContent = 'Close';
    buttonContainer.appendChild(modalCloseBtn);
    const modalSubmitBtn = document.createElement('button');
    modalSubmitBtn.className = `${modalName}-modal-button`;
    modalSubmitBtn.type = 'submit';
    modalSubmitBtn.value = 'Add';
    modalSubmitBtn.textContent = `Create ${modalName}`;
    buttonContainer.appendChild(modalSubmitBtn);

    modalContent.appendChild(modalForm);
    modalContent.appendChild(buttonContainer);
    element.appendChild(modalContent);

    return element;
};

export { modalModule };
