import { Component, h, State } from '@stencil/core';
import translation, { t } from '../../base/translation';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css'
})
export class AppHome {

    companyLink: string = 'https://www.nava.com.br/';

    @State() localeDetermined: boolean = false;

    componentWillLoad() {
        translation.init().then(() => {
            this.localeDetermined = true
        });
    }

    render() {
        if (!this.localeDetermined)
            return null;

        return (
            <div class="home-page">
                <div>
                    <span class="hello">{t('hello')}</span>
                </div>
                <div>
                    <span>{t('welcome')}&nbsp;</span>
                    <a href={this.companyLink} rel="nofollow noreferrer noopener external" target="_blank">{t('currentCompany')}</a>
                </div>
                <div>
                    <img class="profile-picture" src="assets/images/profile-picture.jpeg"></img>
                </div>
                <div>
                    <a href={this.companyLink}>{t('portfolio')}</a>
                </div>
                <div>
                    <a href={this.companyLink}>{t('aboutMe')}</a>
                </div>
                <div>
                    <a href={this.companyLink}>{t('contact')}</a>
                </div>
            </div>
        )
    }
}