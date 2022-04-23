import { Component, h } from "@stencil/core";
import translationService, { t } from "../../base/translation-service";

@Component({
    tag: 'app-profile',
    styleUrl: 'app-profile.scss'
})
export class AppProfile {

    currentLanguage = translationService.getCurrentLanguage();

    getLanguageName() {
        return this.currentLanguage == 'en' ? 'PT' : 'EN';
    }

    changeLanguage() {
        translationService.setLanguage(this.currentLanguage == 'en' ? 'pt-BR' : 'en');

        location.reload();
    }

    render() {
        return (
            <div class="profile-component">
                <h1 class="hello">
                    {t('helloIamLucas')}
                </h1>
                <h3 class="passionate-developer">
                    {t('passionateDeveloper')}
                </h3>
                <div>
                    <img class="image-profile" width={200} height={200} src="/assets/images/foto-perfil.png" alt="selfie"></img>
                </div>
                <div class="profile-links">
                    <a href="#aboutMe">{t('aboutMeLink')}</a>
                    <a href="#experiences">{t('experiencesLink')}</a>
                    <a href="#contact">{t('contactLink')}</a>
                </div>
                <div class="bottom-links">
                    <a aria-label="email" href="mailto:contato@lscrocha.com.br" rel="nofollow noreferrer noopener external"><span class="iconify icon-white" data-icon="mdi:email"></span></a>
                    <a aria-label="instagram" target="_blank" href="https://www.instagram.com/lscrocha1/" rel="nofollow noreferrer noopener external"><span class="iconify icon-white" data-icon="mdi:instagram"></span></a>
                    <a aria-label="lucascrocha" target="_blank" href="https://www.linkedin.com/in/lucascrocha/" rel="nofollow noreferrer noopener external"><span class="iconify icon-white" data-icon="mdi:linkedin"></span></a>
                    <a aria-label="lecas" target="_blank" href="https://twitch.tv/lecas" rel="nofollow noreferrer noopener external"><span class="iconify icon-white" data-icon="mdi:twitch"></span></a>
                    <a aria-label="youtube" target="_blank" href="https://www.youtube.com/channel/UCmBKSMYDh8T6aKJi88taw7w" rel="nofollow noreferrer noopener external"><span class="iconify icon-white" data-icon="mdi:youtube"></span></a>
                </div>
                <div class="language-changer" onClick={() => this.changeLanguage()}>
                    <span class="iconify iconify-globe" data-icon="bi:globe"></span>
                    {this.getLanguageName()}
                </div>
            </div>
        )
    }
}