import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (event) => {
            this._handleFormSubmit(event, this._getInputValues());
        });
    }

    close() {
        this._popupForm.reset();
        super.close();
    }
    
}
