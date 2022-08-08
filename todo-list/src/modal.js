
const modalModule = (modalName, headerText) => {
    // Parent Element
    const element = document.createElement('div');
    element.id = `${modalName}-modal`;


    // Modal Top Panel
    const modalTopPanel = document.createElement('div');
    modalTopPanel.id = `${modalName}-modal-top-panel`;
    // Header
    const modalHeader = document.createElement('h4');
    modalHeader.className = `${modalName}-modal-header`;
    modalHeader.textContent = `${headerText}`;
    modalTopPanel.appendChild(modalHeader);
    // Close Button
    const closeBtn = document.createElement('span');
    closeBtn.className = `${modalName}-close-button`;
    closeBtn.innerHTML = '&times';
    modalTopPanel.appendChild(closeBtn);
    element.appendChild(modalTopPanel);

    
    // Modal Content
    const modalContent = document.createElement('div');
    modalContent.className = `${modalName}-modal-content`;
    // Form
    const modalForm = document.createElement('div');
    modalForm.class = `${modalName}-modal-form`;
    // Label
    const modalLabel = document.createElement('div');
    modalLabel.for = `${modalName}-name`;
    modalLabel.textContent = `${headerText}`;
    modalForm.appendChild(modalLabel);
    modalForm.style.display = 'flex';
    modalForm.style.flexDirection = 'column';
    // Input textbox
    const modalInput = document.createElement('input');
    modalInput.type = 'text';
    modalInput.id = `${modalName}-name`;
    modalInput.name = `${modalName}-name`;
    modalInput.placeholder = `Your ${modalName}`;
    modalForm.appendChild(modalInput);
    // Add/submit Button
    const modalSubmitBtn = document.createElement('button');
    modalSubmitBtn.className = `${modalName}-modal-button`;
    modalSubmitBtn.type = 'submit';
    modalSubmitBtn.value = 'Add';
    modalForm.appendChild(modalSubmitBtn);
    modalContent.appendChild(modalForm)
    element.appendChild(modalContent);

    return element;
};

export { modalModule };
