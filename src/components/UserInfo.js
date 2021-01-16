export class UserInfo {
    constructor(popupNameSelector, popupDescriptionSelector, popupAvatarSelector) {
        this._popupName = document.querySelector(popupNameSelector);
        this._popupDescription = document.querySelector(popupDescriptionSelector);
        this._popupAvatar = document.querySelector(popupAvatarSelector);
    }

    getUserInfo() {
        return {
            name: this._popupName.textContent,
            description: this._popupDescription.textContent,
            id: this._id
        }
    }

    setUserInfo({ name, about, avatar, _id }) {
        this._popupName.textContent = name;
        this._popupDescription.textContent = about;
        this.setUserAvatar(avatar);
        this._id = _id;
    }

    setUserAvatar(avatar) {
        this._popupAvatar.style.backgroundImage = `url('${avatar}')`;
    }

}
