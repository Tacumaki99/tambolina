//contact
var first_name = document.getElementById('first_name');
var last_name = document.getElementById('last_name');
var email = document.getElementById('email');
var agree_terms = document.getElementById('agree-terms');

const submit = document.getElementById('submit');

submit.addEventListener('click', validateForm);

function validateForm(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName');
    const firstNameErr = document.getElementById('firstNameErr');
    const lastName = document.getElementById('lastName');
    const lastNameErr = document.getElementById('lastNameErr');
    const email = document.getElementById('email');
    const emailErr = document.getElementById('emailErr');
    const agreeTerms = document.getElementById('agreeTerms');
    const agreeTermsErr = document.getElementById('agreeTermsErr');

    if (!firstName.value) {
        firstNameErr.classList.add('visible');
        firstName.classList.add('invalid');
        firstNameErr.setAttribute('aria-hidden', false);
        firstName.setAttribute('aria-invalid', true);
    }
    else {
        firstNameErr.classList.remove('visible');
        firstName.classList.remove('invalid');
        firstNameErr.setAttribute('aria-hidden', true);
        firstName.setAttribute('aria-invalid', false);
    }

    if (!lastName.value) {
        lastNameErr.classList.add('visible');
        lastName.classList.add('invalid');
        lastNameErr.setAttribute('aria-hidden', false);
        lastNameErr.setAttribute('aria-invalid', true);
    }
    else {
        lastNameErr.classList.remove('visible');
        lastName.classList.remove('invalid');
        lastNameErr.setAttribute('aria-hidden', true);
        lastNameErr.setAttribute('aria-invalid', false);
    }

    console.log(email.value);
    if (!email.value) {
        emailErr.classList.add('visible');
        email.classList.add('invalid');
        emailErr.setAttribute('aria-hidden', false);
        email.setAttribute('aria-invalid', true);
    } else if (
        !email.value
            .toLowerCase()
            .match(
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            )
    ) {
        emailErrValid.classList.add('visible');
        email.classList.add('invalid');
        emailErrValid.setAttribute('aria-hidden', false);
        email.setAttribute('aria-invalid', true);
        emailErr.classList.remove('visible');
        email.classList.remove('invalid');
    }
    else {
        emailErrValid.classList.remove('visible');
        email.classList.remove('invalid');
        emailErrValid.setAttribute('aria-hidden', true);
        email.setAttribute('aria-invalid', false);
    }

    if (!agreeTerms.checked) {
        agreeTermsErr.classList.add('visible');
        agreeTerms.classList.add('invalid');
        agreeTermsErr.setAttribute('aria-hidden', false);
        agreeTerms.setAttribute('aria-invalid', true);
    }
    else {
        agreeTermsErr.classList.remove('visible');
        agreeTerms.classList.remove('invalid');
        agreeTermsErr.setAttribute('aria-hidden', true);
        agreeTerms.setAttribute('aria-invalid', false);
    }
}
//contact