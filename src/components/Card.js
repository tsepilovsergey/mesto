export class Card {
    constructor({data, openPopupImage}, cardSelestor) {
        this._name = data.name;
        this._link = data.link;
        this._openPopupImage = openPopupImage;
        this._cardSelestor = cardSelestor;
    }

    _getTemplate() {
        const cardElement = document.getElementById(this._cardSelestor)
        .content
        .querySelector('.element')
        .cloneNode(true)

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        const cardImage = this._element.querySelector('.element__image');
        cardImage.src = this._link;
        cardImage.alt = this._name;

        return this._element;
    }

    _trashCard() {
        this._element.remove();
        this._element = null;
    }

    _likeCard() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }

    _setEventListeners() {
        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._trashCard();
        });

        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._likeCard();
        });

        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._openPopupImage();
        });
    }

}
