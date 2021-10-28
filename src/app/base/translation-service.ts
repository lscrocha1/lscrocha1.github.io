import { Translations } from "./types";

let _translations: Translations;

class TranslationService {

    private fallbackLanguage = 'en'

    private supportedLanguages = ['en', 'pt-BR'];

    private languageKey: string = "lscrocha1-token-language";

    public getCurrentSelectedLanguage() {
        return localStorage.getItem(this.languageKey);
    }

    async setLanguage(language: string) {
        if (!this.supportedLanguages.includes(language))
            language = this.fallbackLanguage;

        localStorage.setItem(this.languageKey, language);

        await this.load(language);
    }

    private getUserLocale(): string {
        return window.navigator.language;
    }

    public t(key: string): string {
        if (!_translations)
            return key;

        return _translations[key] || key;
    }

    async init() {
        let currentSelectedLanguage = this.getCurrentSelectedLanguage();

        if (!currentSelectedLanguage) {
            currentSelectedLanguage = this.getUserLocale();

            this.setLanguage(currentSelectedLanguage);
        }

        await this.load(currentSelectedLanguage);
    }

    private async load(language: string) {
        let url = `/assets/translation/${language}.json`;

        _translations = await fetch(url).then(e => e.json());
    }
}

export const t = new TranslationService().t;

export default new TranslationService();