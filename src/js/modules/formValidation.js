const form = document.querySelector('.js-form');
const inputName = document.querySelector('input[name=contact-name]');
const inputEmail = document.querySelector('input[name=contact-email]');
const formArea = document.querySelector('textarea[name=contact-area]');
const errorMessage = document.querySelector('.js-error--message');

console.log(formArea);

form.addEventListener("submit", event => {
    event.preventDefault();
    let errorArray = [];

    if (inputName.value.length <= 3) {
        errorArray.push("Źle wypełnione imię");
    }
    const regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regMail.test(inputEmail.value)) {
        errorArray.push("Źle wypełnione pole email");
    }
    if (formArea.value.length <= 8) {
        errorArray.push("Źle wypełniona treść wiadomości");
    }
    if (errorArray.length < 1) {
        event.target.submit();
    } else{
        errorMessage.innerHTML = `<p>Błąd formularza, wystąpiły błędy: </p>
        <ol>
            ${errorArray.map(el =>`<li>${el}</li>`).join("")}
        </ol>`;
    }
})