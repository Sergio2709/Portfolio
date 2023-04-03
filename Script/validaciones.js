export function valida(input) {
    const inputType =input.dataset.type;

    if (input.validity.valid){
        input.parentElement.classList.remove("contact__invalid-input");
        input.parentElement.querySelector(".contact__item-message").innerHTML = "";
    } else {
        input.parentElement.classList.add("contact__invalid-input");
        input.parentElement.querySelector(".contact__item-message").innerHTML = showErrorMessage(inputType,input);
    }
}

const errorTypes = ["valueMissing","typeMismatch","patternMismatch"];

const errorMessages = {
    name: {
        valueMissing: "Name field can't be empty",
        patternMismatch: "Name field must contain 10 to 50 characters"
    },
    email: {
        valueMissing: "Email field can't be empty",
        typeMismatch: "Email format must be xxxxxx@xxx.xx"
    },
    subject: {
        valueMissing: "Subject field can't be empty",
        patternMismatch: "Subject field must contain 10 to 50 characters "
    },
    message: {
        valueMissing: "Message field can't be empty",
        patternMismatch: "Message field must contain 50 to 300 characters "
    },
}

function showErrorMessage(inputType,input){
    let message = "";
    errorTypes.forEach((error) => {
        if (input.validity[error]){
            console.log(inputType, error);
            console.log(input.validity[error]);
            console.log(errorMessages[inputType][error]);
            message = errorMessages[inputType][error];
        }
    });
    return message;
}

const send = document.querySelector("#button__send")

send.addEventListener("click", () => {
    alert("Se envio correctamente")
})

