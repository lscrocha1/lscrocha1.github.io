import { Component, h } from "@stencil/core";
import { t } from "../../base/translation-service";

@Component({
    tag: 'app-about-me',
    styleUrl: 'app-about-me.scss'
})
export class AppAboutMe {

    getBody(): string {
        let section = t('aboutMeBody');

        return section.replace('{age}', (new Date().getFullYear() - 2016).toString());
    }

    render() {
        return (
            <div class="container about-me" id="aboutMe">
                <h1 class="text-center-mobile">{t('aboutMeTitle')}</h1>
                <h3 class="about-me-body">{this.getBody()}</h3>
                <div class="button-float-right button-follow">
                    <a href="#" class="primary-button">
                        {t('followMeTwitch')}
                    </a>
                </div>
            </div>
        )
    }
}