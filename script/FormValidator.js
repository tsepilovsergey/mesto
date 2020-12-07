export class FormValidator {
    constructor(form, validityState) {
        this._form = form;
        this._validityState = validityState;
        this._inputList = Array.from(this._form.querySelectorAll(this._validityState.inputSelector));
        this._sumbitButton = this._form.querySelector(this._validityState.submitButtonSelector);
    }

    enableValidation () {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault ();
        });
        this._setEventListeners ();
    }

    _setEventListeners () {
        this._toggleButtonState ();
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            });
        });
    };

    _checkInputValidity (input) {
        if (!input.validity.valid) {
            this._showInputError(input, input.validationMessage);
        } else {
            this._hideInputError(input);
        }
    };

    _showInputError (input, errorMessage) {
        const error = this._form.querySelector(`#${input.id}-error`);
        input.classList.add(this._validityState.inputErrorClass);
        error.textContent = errorMessage;
        error.classList.add(this._validityState.errorClass);
    };

    _hideInputError (input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        input.classList.remove(this._validityState.inputErrorClass);
        error.textContent = '';
        error.classList.remove(this._validityState.errorClass);
    };

    resetValidationState () {  
        this._inputList.forEach((input) => { 
            this._hideInputError(input); 
        }); 
    };

    _hasInvalidInput () {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        });
    };

    _toggleButtonState () {
        if (this._hasInvalidInput(this._inputList)) {
            this._sumbitButton.classList.add(this._validityState.inactiveButtonClass);
            this._sumbitButton.disabled = true;
        } else {
            this._sumbitButton.classList.remove(this._validityState.inactiveButtonClass);
            this._sumbitButton.disabled = false;
        }
    };

}
