export class Card {
    constructor({data, openPopupImage, handleDeleteClick, handleLikeClick}, cardSelestor) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._owner = data.owner;
        this._cardOwner = data.cardOwner;
        this._cardLike = data.cardLike;
        this._openPopupImage = openPopupImage;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
        this._cardSelestor = cardSelestor;
    }

    _getTemplate() {
        const cardElement = document.getElementById(this._cardSelestor)
        .content
        .querySelector('.element')
        .cloneNode(true)

        if(!this._cardOwner) {
            const trashButton = cardElement.querySelector('.element__trash');
            trashButton.remove()
        }
        if(this._cardLike) {
            cardElement.querySelector('.element__like').classList.add('element__like_active');
        }

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__likes-number').textContent = this._likes.length;
        const cardImage = this._element.querySelector('.element__image');
        cardImage.src = this._link;
        cardImage.alt = this._name;

        return this._element;
    }

    trashCard() {
        this._element.remove();
        this._element = null;
    }

    getId() {
        return this._id;
    }

    cardLike() {
        return this._cardLike;
    }

    setLike(status) {
        this._cardLike = status;
    }

    setLikesNumber(event, result) {
        this._element.querySelector('.element__likes-number').textContent = result.likes.length;
        event.target.classList.toggle('element__like_active');
    }

    _setEventListeners() {
        if(this._cardOwner) {
            this._element.querySelector('.element__trash').addEventListener('click', () => {
                this._handleDeleteClick(this);
            });
        }

        this._element.querySelector('.element__like').addEventListener('click', (event) => {
            this._handleLikeClick(event, this);
        });

        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._openPopupImage();
        });
    }

}
