const form = document.querySelector('#ticketForm');
const typeSelect = document.querySelector('#type');
const extraField = document.querySelector('#extraField');
const extraLabel = document.querySelector('#extraLabel');
const extraInput = document.querySelector('#extraInput');
const messages = document.querySelector('#messages');
const ticketOutput = document.querySelector('#ticketOutput');

function showExtraField() {
    const type = typeSelect.value;

    messages.innerHTML = '';
    ticketOutput.innerHTML = '';
    extraInput.value = '';

    if (type === 'student') {
        extraLabel.textContent = 'Student I#';
        extraInput.placeholder = '123456789';
        extraField.classList.remove('hidden');
    } else if (type === 'guest') {
        extraLabel.textContent = 'Access Code';
        extraInput.placeholder = 'EVENT131';
        extraField.classList.remove('hidden');
    } else {
        extraLabel.textContent = '';
        extraInput.placeholder = '';
        extraField.classList.add('hidden');
    }
}

function isFutureDate(dateValue) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chosenDate = new Date(`${dateValue}T00:00:00`);
    return chosenDate > today;
}

function displayErrors(errors) {
    messages.innerHTML = errors.map(error => `<p class="error">${error}</p>`).join('');
}

function createTicket(data) {
    ticketOutput.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${data.firstName} ${data.lastName}</p>
        <p>${data.type}</p>
        <p>${data.eventDate}</p>
    `;
}

typeSelect.addEventListener('change', showExtraField);

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const type = typeSelect.value;
    const eventDate = document.querySelector('#eventDate').value;
    const extraValue = extraInput.value.trim();

    const errors = [];

    if (firstName === '') {
        errors.push('First name is required');
    }

    if (lastName === '') {
        errors.push('Last name is required');
    }

    if (email === '') {
        errors.push('Email is required');
    }

    if (type === '') {
        errors.push('Type is required');
    }

    if (eventDate === '') {
        errors.push('Event date is required');
    } else if (!isFutureDate(eventDate)) {
        errors.push('Event date must be later than today');
    }

    if (type === 'student' && !/^\d{9}$/.test(extraValue)) {
        errors.push('Student I# must be 9 digits');
    }

    if (type === 'guest' && extraValue !== 'EVENT131') {
        errors.push('Access Code must be EVENT131');
    }

    ticketOutput.innerHTML = '';

    if (errors.length > 0) {
        displayErrors(errors);
        return;
    }

    messages.innerHTML = '';
    createTicket({ firstName, lastName, type, eventDate });
    form.reset();
});
