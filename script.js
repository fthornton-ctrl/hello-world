// Accessible Form Validation Script
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const errorSummary = document.getElementById('form-error-summary');
    const errorList = document.getElementById('summary-error-list');
    const successMsg = document.getElementById('form-success');

    const fields = [
        {
            input: document.getElementById('full-name'),
            error: document.getElementById('name-error'),
            validate: (val) => val.trim().length > 0 ? '' : 'Please enter your full name.'
        },
        {
            input: document.getElementById('email-address'),
            error: document.getElementById('email-error'),
            validate: (val) => {
                if (!val.trim()) return 'Please enter your email address.';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(val.trim()) ? '' : 'Please enter a valid email address (e.g., name@example.com).';
            }
        },
        {
            input: document.getElementById('subject'),
            error: document.getElementById('subject-error'),
            validate: (val) => val ? '' : 'Please select a reason for contact.'
        },
        {
            input: document.getElementById('message'),
            error: document.getElementById('message-error'),
            validate: (val) => {
                if (!val.trim()) return 'Please enter a message.';
                return val.trim().length >= 10 ? '' : 'Your message must be at least 10 characters long.';
            }
        }
    ];

    // Live validation on blur & input
    fields.forEach(field => {
        if (!field.input) return;

        field.input.addEventListener('blur', () => {
            validateSingleField(field);
        });

        field.input.addEventListener('input', () => {
            if (field.input.getAttribute('aria-invalid') === 'true') {
                validateSingleField(field);
            }
        });
    });

    function validateSingleField(field) {
        const errorMsg = field.validate(field.input.value);
        const group = field.input.closest('.form-group');

        if (errorMsg) {
            field.input.setAttribute('aria-invalid', 'true');
            field.error.textContent = errorMsg;
            if (group) group.classList.add('has-error');
            return errorMsg;
        } else {
            field.input.setAttribute('aria-invalid', 'false');
            field.error.textContent = '';
            if (group) group.classList.remove('has-error');
            return '';
        }
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let errors = [];
        errorList.innerHTML = '';

        fields.forEach(field => {
            if (!field.input) return;
            const err = validateSingleField(field);
            if (err) {
                errors.push({
                    id: field.input.id,
                    label: field.input.labels && field.input.labels[0] ? field.input.labels[0].innerText.replace('*', '').trim() : field.input.name,
                    msg: err
                });
            }
        });

        if (errors.length > 0) {
            // Show error summary and focus it for screen reader users
            errorSummary.classList.remove('hidden');
            successMsg.classList.add('hidden');

            errors.forEach(item => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = '#' + item.id;
                link.textContent = item.label + ': ' + item.msg;
                link.addEventListener('click', (evt) => {
                    evt.preventDefault();
                    document.getElementById(item.id).focus();
                });
                li.appendChild(link);
                errorList.appendChild(li);
            });

            errorSummary.focus();
        } else {
            // Success state
            errorSummary.classList.add('hidden');
            successMsg.classList.remove('hidden');
            contactForm.reset();
            fields.forEach(field => {
                if (field.input) {
                    field.input.setAttribute('aria-invalid', 'false');
                    const group = field.input.closest('.form-group');
                    if (group) group.classList.remove('has-error');
                }
            });
            successMsg.focus();
        }
    });
});
