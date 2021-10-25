import translationService, { t } from './translation-service';

export abstract class BaseComponent {
    constructor() {
        translationService.init();
    }

    public t(key: string) {
        return t(key);
    }
}