export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._pushKey = this._pushKey.bind(this);
        this._closeOverlay = this._closeOverlay.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._pushKey);
        document.addEventListener('mousedown', this._closeOverlay);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._pushKey);
        document.removeEventListener('mousedown', this._closeOverlay);
    }

    _pushKey(event) {
        if (event.key === "Escape") {
            this.close();
        }
    }

    _closeOverlay(event) {
        if (event.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (event) => {
            this._closeOverlay(event);
        })

        this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
            this.close();
        })
    }

}
