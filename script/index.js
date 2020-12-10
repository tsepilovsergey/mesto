import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup } from './popup.js';
import { validityState, 
    profileEditButton, 
    profileAddButton, 
    popupCloseButtons, 
    popupEdit, 
    popupAdd, 
    profileTitle, 
    profileSubtitle, 
    nameInput, 
    jobInput, 
    titleInput, 
    linkInput, 
    initialCards, 
    elementsContainer, 
    fullImage,
    fullImageTitle,
    popupImage } from './constants.js';

function openPopupEdit () {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    popupEditFormValidator.resetValidationState();
    openPopup(popupEdit);
}

function openPopupAdd () {
    titleInput.value = '';
    linkInput.value = '';
    popupAddFormValidator.resetValidationState();
    openPopup(popupAdd);
}

function openPopupImage (name, link) {
    fullImage.src = link;
    fullImageTitle.textContent = name;
    openPopup(popupImage);
}

function handleFormEditSubmit (event) {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEdit);
}

function handleFormAddSubmit (event) {
    event.preventDefault();
    const card = new Card({name: titleInput.value, link: linkInput.value}, 'element-template', openPopupImage);
    elementsContainer.prepend(card.generateCard());
    closePopup(popupAdd);
}

initialCards.forEach((item) => {
    const card = new Card(item, 'element-template', openPopupImage);
    elementsContainer.append(card.generateCard());
})

const popupEditFormValidator = new FormValidator(popupEdit, validityState);
popupEditFormValidator.enableValidation();
const popupAddFormValidator = new FormValidator(popupAdd, validityState);
popupAddFormValidator.enableValidation();

profileEditButton.addEventListener('click', openPopupEdit);
profileAddButton.addEventListener('click', openPopupAdd);
popupCloseButtons.forEach((item) => item.addEventListener('click', () => closePopup(item.closest('.popup'))));
popupEdit.addEventListener('submit', handleFormEditSubmit);
popupAdd.addEventListener('submit', handleFormAddSubmit);
