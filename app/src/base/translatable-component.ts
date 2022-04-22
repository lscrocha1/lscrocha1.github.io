import translationService, { t } from "./translation-service";

export class TranslatableComponent {
    constructor() {
        translationService.init();
    }

    public t(key: string) {
        return t(key);
    }
}