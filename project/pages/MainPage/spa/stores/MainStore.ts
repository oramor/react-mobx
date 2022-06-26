import { makeAutoObservable } from 'mobx';

export class MainStore {
    textboxPlaceholder = '';
    constructor() {
        makeAutoObservable(this);
    }

    changeTextboxPlaceholder(v: string) {
        this.textboxPlaceholder = v;
    }
}
