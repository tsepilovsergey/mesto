const content = document.querySelector('.content');
const profileEditButton = content.querySelector('.profile__edit-button');
const profileAddButton = content.querySelector('.profile__add-button');
const popups = Array.from(document.querySelectorAll('.popup'));
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupImage = document.querySelector('.popup-image');
const popupCloseButtons = popups.map((item) => item.querySelector('.popup__close-button'));
const fromEditElement = popups.find((item) => item.querySelector('.popup__form-edit'));
const fromAddElement = popups.find((item) => item.querySelector('.popup__form-add'));
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_description');
const titleInput = popupAdd.querySelector('.popup__input_type_title');
const linkInput = popupAdd.querySelector('.popup__input_type_link');
const profileTitle = content.querySelector('.profile__title');
const profileSubtitle = content.querySelector('.profile__subtitle');
const elementsContainer = document.querySelector('.elements__item');
const elementTemplate = document.querySelector('#element-template').content;
const fullImage = popupImage.querySelector('.popup__fulled-image');
const fullImageTitle = popupImage.querySelector('.popup__title-image');

const initialCards = [
    {
        name: 'Москва',
        link: './images/element-moscow.jpg',
    },
    {
        name: 'Санкт-Петербург',
        link: './images/element-sankt-petersburg.jpg',
    },
    {
        name: 'Крым',
        link: './images/element-krym.jpg',
    },
    {
        name: 'Байкал',
        link: './images/element-baikal.jpg',
    },
    {
        name: 'Алтай',
        link: './images/element-altai.jpg',
    },
    {
        name: 'Камчатка',
        link: './images/element-kamchatka.jpg',
    }
];

function addElement (titleValue, imageValue) {
    const createCard = elementTemplate.cloneNode(true);
    createCard.querySelector('.element__title').textContent = titleValue;
    createCard.querySelector('.element__like')
        .addEventListener('click', function (event) {
            event.target.classList.toggle('element__like_active');
        });
    createCard.querySelector('.element__trash')
        .addEventListener('click', function (event) {
            event.target.closest('.element').remove ();
        });
    const cardImage = createCard.querySelector('.element__image')
        cardImage.src = imageValue;
        cardImage.alt = titleValue;
    cardImage.addEventListener('click', () => openPopupImage(titleValue, imageValue)); 
    return createCard; 
};

initialCards.forEach((item) => elementsContainer.append(addElement(item.name, item.link)));

function openPopupEdit () {
    const saveEditButton = popupEdit.querySelector('.popup__button');
    saveEditButton.classList.add('popup__button_disabled');
    saveEditButton.disabled = true;
    hideInputError(popupEdit, nameInput, ValidityState);
    hideInputError(popupEdit, jobInput, ValidityState);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupEdit);
};

function openPopupAdd () {
    const saveAddButton = popupAdd.querySelector('.popup__button');
    saveAddButton.classList.add('popup__button_disabled');
    saveAddButton.disabled = true;
    hideInputError(popupAdd, titleInput, ValidityState);
    hideInputError(popupAdd, linkInput, ValidityState);
    titleInput.value = '';
    linkInput.value = '';
    openPopup(popupAdd);
};

function openPopupImage (titleValue, imageValue) {
    fullImage.src = imageValue;
    fullImageTitle.textContent = titleValue;
    openPopup(popupImage);
};

function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
};

function closePopup (popup) { 
    popup.classList.remove('popup_opened');
};

popups.forEach((item) => item.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
        closePopup(item);
    };
}));

function keyHandler (event) {
    const openedPopup = document.querySelector('.popup_opened');
    if (event.key === "Escape") {
        closePopup(openedPopup);
    };
};

function formEditSubmitHandler (event) {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEdit);
};

function formAddSubmitHandler (event) {
    event.preventDefault();
    const title = titleInput.value;
    const link = linkInput.value;
    elementsContainer.prepend(addElement(title, link));
    closePopup(popupAdd);
};

profileEditButton.addEventListener('click', openPopupEdit);
profileAddButton.addEventListener('click', openPopupAdd);
popupCloseButtons.forEach((item) => item.addEventListener('click', () => closePopup(item.closest('.popup'))));
popupEdit.addEventListener('submit', formEditSubmitHandler);
popupAdd.addEventListener('submit', formAddSubmitHandler);