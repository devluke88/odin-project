
const modalModule = (modalName, headerText) => {
    // Parent Element
    const element = document.createElement('div');
    element.id = `${modalName}-modal`;

    // Modal Top Panel
    const modalTopPanel = document.createElement('div');
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
    // CONTINUE !!!!

    return element;
};

export { modalModule };
