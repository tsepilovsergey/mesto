export class Card {
    constructor(data, cardSelestor, openPopupImage) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelestor = cardSelestor;
        this._openPopupImage = openPopupImage;
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
            this._openPopupImage(this._name, this._link);
        });
    }

}
