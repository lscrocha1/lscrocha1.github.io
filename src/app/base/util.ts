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