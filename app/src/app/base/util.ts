import translationService from "./translation-service";

export function scrollTo(elementId: string) {
    let element = document.getElementById(elementId);

    if (element == null)
        return;

    let position = element.offsetTop;

    if (isMobile())
        position -= 80;

    window.scrollTo({ top: position, behavior: 'smooth' });
}

export function isMobile() {
    return window.innerWidth <= 768;
}

export function formatDate(date: string) {
    if (!date)
        return date;

    return new Intl
        .DateTimeFormat(translationService.getCurrentSelectedLanguage(), {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        .format(new Date(date));
}