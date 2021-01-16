import { Popup } from './Popup.js';

export class PopupConfirm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._popupButton = this._popup.querySelector('.popup__button');
    }

    open(card) {
        super.open();
        this._card = card;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupButton.addEventListener('click', () => {
            this._handleSubmit(this._card);
        });
    }

}
