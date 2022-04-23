import { Component, h } from "@stencil/core";
import { t } from "../../base/translation-service";

@Component({
    tag: 'app-contact',
    styleUrl: 'app-contact.scss'
})
export class AppContact {
    render() {
        return (
            <div class="container contact-component" id="contact">
                <h1 class="text-center-mobile">{t('contactGetInTouch')}</h1>
                <form class="form-full">
                    <div class="form-group">
                        <label htmlFor="name">{t('contactName')}</label>
                        <div>
                            <input class="input" required id="name"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">{t('contactEmail')}</label>
                        <div>
                            <input class="input" required id="email"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="message">{t('contactMessage')}</label>
                        <div>
                            <textarea required class="input textarea" id="message"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <input required type="checkbox"></input>
                        <label htmlFor="message">{t('contactAccept')}</label>
                    </div>
                    <div class="button-float-right">
                        <button type="submit" class="primary-button">
                            {t('contactSend')}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}