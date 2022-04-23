import { Translations } from "./types";

let _translations: Translations;

class TranslationService {
    private fallbackLanguage = 'en';
    private supportedLanguages = ['en', 'pt-BR'];
    private languageKey = 'lscrocha1-token-language';

    public getCurrentLanguage(): string {
        return localStorage.getItem(this.languageKey) ?? '';
    }

    public async setLanguage(language: string) {
        if (!this.supportedLanguages.includes(language))
            language = this.fallbackLanguage;

        localStorage.setItem(this.languageKey, language);

        await this.loadTranslation(language);
    }

    private async loadTranslation(language: string) {
        const url = `/assets/translation/${language}.json`;

        _translations = await fetch(url).then(e => e.json());
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
        let currentLanguage = this.getCurrentLanguage();

        if (!currentLanguage)
            currentLanguage = this.getUserLocale();

        await this.setLanguage(currentLanguage);
    }
}

export const t = new TranslationService().t;

export default new TranslationService();