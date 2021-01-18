export class Section {
    constructor(containerSelector) {
        this._container = document.querySelector(containerSelector);
    }

    _renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }

    initialItems({ data, renderer }) { 
        this._items = data; 
        this._renderer = renderer; 
        this._renderItems(); 
    }

    appendItem(element) {
        this._container.append(element);
    }

    prependItem(element) {
        this._container.prepend(element);
    }

}
