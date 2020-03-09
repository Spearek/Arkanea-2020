const form = document.querySelector('.js-form');
const inputName = document.querySelector('input[name="contactName"]');
const inputEmail = document.querySelector('input[name="contactEmail"]');
const formArea = document.querySelector('textarea[name="contactArea"]');
const errorMessage = document.querySelector('.js-error--message');

const regCollection = {
    contactName: /^[a-zA-z]{3,20}$/,
    contactEmail: /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    contactArea: /^[^<>]{5,512}$/
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    }
}
function submitValidation() {
    let isValidate = ((regCollection.contactName.test(inputName.value)) && (regCollection.contactEmail.test(inputEmail.value)) && (regCollection.contactArea.test(formArea.value)));
    console.log(isValidate)
    if (isValidate) {
        return true;
    } else {
        return false;
    }

}

inputName.addEventListener('keyup', () => {
    validate(inputName, regCollection.contactName);
});

inputEmail.addEventListener('keyup', () => {
    validate(inputEmail, regCollection.contactEmail);
});

formArea.addEventListener('keyup', () => {
    validate(formArea, regCollection.contactArea);
});


form.addEventListener("submit", event => {
    event.preventDefault();

    if (submitValidation()) {
        event.target.submit();
    } else {
        errorMessage.textContent="Formularz niepoprawnie wypełniony. Proszę spróbować ponownie."
    }

});
