import { Component, h, State } from '@stencil/core';
import translation, { t } from '../../base/translation';

@Component({
    tag: 'app-home'
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
            <div>
                <div>
                    {t('hello')}
                </div>
                <div>
                    <span>{t('welcome')}&nbsp;</span>
                    <a href={this.companyLink} rel="nofollow noreferrer noopener external" target="_blank">{t('currentCompany')}</a>
                </div>
            </div>
        )
    }
}