// Contact Section

const contactModule = (contactTextHeader) => {
    const contact = document.createElement('div');
    contact.id = 'contact';

    const contactHeader = document.createElement('div');
    contactHeader.className = 'contact-header';
    contactHeader.textContent = contactTextHeader;
    contact.appendChild(contactHeader);

    // Create form
    const form = document.createElement('form');
    form.className = 'form';
    // Full Name
    const fullNameInput = document.createElement('input');
    fullNameInput.className = 'full-name form-element';
    fullNameInput.type = 'text';
    fullNameInput.name = 'full-name';
    fullNameInput.placeholder = 'Full Name';
    form.appendChild(fullNameInput);
    // Email
    const emailInput = document.createElement('input');
    emailInput.className = 'email form-element';
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'name@example.com';
    form.appendChild(emailInput);
    // Message
    const messageField = document.createElement('textarea');
    messageField.className = 'message form-element';
    messageField.id = 'message';
    messageField.name = 'message';
    messageField.placeholder = 'Message';
    messageField.rows = '3';
    form.appendChild(messageField);
    // Submit button
    const submitButton = document.createElement('input');
    submitButton.className = 'button send';
    submitButton.type = 'submit';
    submitButton.value = 'submit';
    form.appendChild(submitButton);
    contact.appendChild(form);

    // form.addEventListener('submit', submitForm);

    return contact;
}

export { contactModule }