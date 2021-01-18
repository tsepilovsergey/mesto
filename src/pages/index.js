import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupConfirm } from '../components/PopupConfirm.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { validityState, 
    profileEditButton, 
    profileAddButton, 
    popupEdit, 
    popupAdd, 
    popupAvatar,
    nameInput, 
    descriptionInput,
    profileAvatarButton } from '../utils/constants.js';

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
    headers: {
        authorization: '54bcf370-1275-4b3b-905f-be3c184c4a5c',
        'Content-Type': 'application/json'
    }
});

function openPopupEdit() {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    descriptionInput.value = userData.description;
    popupEditFormValidator.resetValidationState();
    editPopup.open();
}

function openPopupAdd() {
    popupAddFormValidator.resetValidationState();
    addPopup.open();
}

function openPopupAvatar() {
    popupAvatarFormValidator.resetValidationState();
    avatarPopup.open();
}

const editPopup = new PopupWithForm('.popup-edit', (event, fields) => {
    event.preventDefault();
    editPopup.showLoading(true);
    api.editProfile(fields['popupName'], fields['popupDescription'])
        .then((result) => {
            userInfo.setUserInfo(result);
            editPopup.close();
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            editPopup.showLoading(false);
        })
});

editPopup.setEventListeners();

const addPopup = new PopupWithForm('.popup-add', (event, fields) => {
    event.preventDefault();
    api.addNewCard(fields['popupTitle'], fields['popupLink'])
        .then((item) => {
            const cardElement = createCard(item);
            cardList.prependItem(cardElement);
            addPopup.close();
        })
        .catch((error) => {
            console.log(error);
        })
});

addPopup.setEventListeners();

const avatarPopup = new PopupWithForm('.popup-avatar', (event, fields) => {
    event.preventDefault();
    avatarPopup.showLoading(true);
    api.editAvatar(fields['popupAvatar'])
        .then((result) => {
            userInfo.setUserAvatar(result.avatar);
            avatarPopup.close();
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            avatarPopup.showLoading(false);
        })
});

avatarPopup.setEventListeners();

const imagePopup = new PopupWithImage('.popup-image');

imagePopup.setEventListeners();

const confirmPopup = new PopupConfirm('.popup-confirm', (card) => {
    api.deleteCard(card.getId())
        .then(() =>{
            card.trashCard();
            confirmPopup.close();
        })
        .catch((error) => {
            console.log(error);
        })
});

confirmPopup.setEventListeners();

const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');

function createCard(item) {
    const card = new Card({
        data: item,
        openPopupImage: () => {
            imagePopup.open({
                name: item.name,
                link: item.link
            });
        },
        handleDeleteClick: (card) => {
            confirmPopup.open(card);
        },
        handleLikeClick: (event, card) => {
            if(card.cardLike()) {
                api.deleteLike(card.getId())
                    .then((result) => {
                        card.setLike(false);
                        card.setLikesNumber(event, result);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else {
                api.addLike(card.getId())
                    .then((result) => {
                        card.setLike(true);
                        card.setLikesNumber(event, result);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
    }, 'element-template');

    return card.generateCard();
}

const popupEditFormValidator = new FormValidator(popupEdit, validityState);
popupEditFormValidator.enableValidation();
const popupAddFormValidator = new FormValidator(popupAdd, validityState);
popupAddFormValidator.enableValidation();
const popupAvatarFormValidator = new FormValidator(popupAvatar, validityState);
popupAvatarFormValidator.enableValidation();

const cardList = new Section('.elements__item');

profileEditButton.addEventListener('click', openPopupEdit);
profileAddButton.addEventListener('click', openPopupAdd);
profileAvatarButton.addEventListener('click', openPopupAvatar);

api.getUserInfo()
    .then((users) => {
        userInfo.setUserInfo(users);
    })
    .then(() => {
        api.getInitialCards()
            .then((items) => {
                const userId = userInfo.getUserInfo().id;
                items.forEach((item) => {
                    if(item.likes.length) {
                        item.likes.forEach((like) => {
                            if(like._id === userId) {
                                item.cardLike = true;
                            }
                        })
                    }
                    if(item.owner._id === userId) {
                        item.cardOwner = true;
                    }
                })
                cardList.initialItems({
                    data: items,
                    renderer: (item) => {
                        const cardElement = createCard(item);
                        cardList.appendItem(cardElement);
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((error) => {
        console.log(error);
    })