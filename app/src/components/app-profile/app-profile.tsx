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
                    <img class="image-profile" width={200} height={200} src="/assets/images/foto-perfil.jpg"></img>
                </div>
                <div class="profile-links">
                    <a href="#">{t('portfolioLink')}</a>
                    <a href="#">{t('experiencesLink')}</a>
                    <a href="#">{t('aboutMeLink')}</a>
                    <a href="#">{t('contactLink')}</a>
                </div>
                <div class="bottom-links">
                    <a href="#"><span class="iconify icon-white" data-icon="mdi:email"></span></a>
                    <a href="#"><span class="iconify icon-white" data-icon="mdi:instagram"></span></a>
                    <a href="#"><span class="iconify icon-white" data-icon="mdi:linkedin"></span></a>
                    <a href="#"><span class="iconify icon-white" data-icon="mdi:twitch"></span></a>
                    <a href="#"><span class="iconify icon-white" data-icon="mdi:youtube"></span></a>
                </div>
                <div class="language-changer" onClick={() => this.changeLanguage()}>
                    <span class="iconify iconify-globe" data-icon="bi:globe"></span>
                    {this.getLanguageName()}
                </div>
            </div>
        )
    }
}