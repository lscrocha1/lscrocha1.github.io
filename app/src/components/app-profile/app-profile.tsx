import { Component, h } from "@stencil/core";
import { TranslatableComponent } from "../../base/translatable-component";
import { Inject } from 'stencil-injection';
import translationService from "../../base/translation-service";

@Component({
    tag: 'app-profile',
    styleUrl: 'app-profile.scss'
})
export class AppProfile {

    @Inject(TranslatableComponent) private translatableComponent: TranslatableComponent;

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
                    {this.translatableComponent.t('helloIamLucas')}
                </h1>
                <h3 class="passionate-developer">
                    {this.translatableComponent.t('passionateDeveloper')}
                </h3>
                <div>
                    <img class="image-profile" width={200} height={200} src="/assets/images/foto-perfil.jpg"></img>
                </div>
                <div class="profile-links">
                    <a href="#">{this.translatableComponent.t('portfolioLink')}</a>
                    <a href="#">{this.translatableComponent.t('experiencesLink')}</a>
                    <a href="#">{this.translatableComponent.t('aboutMeLink')}</a>
                    <a href="#">{this.translatableComponent.t('contactLink')}</a>
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