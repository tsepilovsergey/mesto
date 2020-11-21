const ValidityState = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const enableValidation = (obj) => {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach((form) => {
        form.addEventListener('submit', function (event) {
            event.preventDefault ();
        });
        setEventListeners(form, obj);
    });
};

const setEventListeners = (form, obj) => {
    const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
    const sumbitButton = form.querySelector(obj.submitButtonSelector);
    toggleButtonState(inputList, sumbitButton, obj);
    inputList.forEach((input) => {
        input.addEventListener('input', function () {
            checkInputValidity(form, input, obj);
            toggleButtonState(inputList, sumbitButton, obj);
        });
    });
};

const checkInputValidity = (form, input, obj) => {
    if (!input.validity.valid) {
        showInputError(form, input, input.validationMessage, obj);
    } else {
        hideInputError(form, input, obj);
    };
};

const showInputError = (form, input, errorMessage, obj) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add(obj.inputInvalidClass);
    error.textContent = errorMessage;
    error.classList.add(obj.errorClass);
};

const hideInputError = (formElement, input, obj) => {
    const error = formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(obj.inputInvalidClass);
    error.textContent = '';
    error.classList.remove(obj.errorClass);
}

const hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid;
    })
};

const toggleButtonState = (inputList, sumbitButton, obj) => {
    if (hasInvalidInput(inputList)) {
        sumbitButton.classList.add(obj.inactiveButtonClass);
        sumbitButton.disabled = true;
    } else {
        sumbitButton.classList.remove(obj.inactiveButtonClass);
        sumbitButton.disabled = false;
    };
};
enableValidation(ValidityState);
