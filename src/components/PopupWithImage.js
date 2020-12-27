import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._fullImage = this._popup.querySelector('.popup__fulled-image');
        this._fullImageTitle = this._popup.querySelector('.popup__title-image');
    }

    open({ name, link }) {
        this._fullImage.src = link;
        this._fullImageTitle.textContent = name;
        super.open();
    }
    
}
