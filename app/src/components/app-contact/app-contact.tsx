import { Component, h, Listen, State } from "@stencil/core";
import { t } from "../../base/translation-service";

@Component({
    tag: 'app-contact',
    styleUrl: 'app-contact.scss'
})
export class AppContact {

    @State() formSubmited: boolean = false;

    @Listen('submit')
    async formSubmitEventHandler() {
        this.formSubmited = true;

        return true;
    }

    renderForm() {
        return [
            <form class={`form-full ${this.formSubmited && 'form-hidden'}`} name="gform" id="gform" target="hidden_iframe" enctype="application/x-www-form-urlencoded"
                action="https://docs.google.com/forms/d/e/1FAIpQLSdoaqYbc5OWaoazuZyEzHEwZXN4oWJXd-n7emmFAhBB5_1CIw/formResponse?">
                <div class="form-group">
                    <label htmlFor="entry.1563949243">{t('contactName')}</label>
                    <div>
                        <input class="input" required id="entry.1563949243" name="entry.1563949243" ></input>
                    </div>
                </div>
                <div class="form-group">
                    <label htmlFor="entry.1707085558">{t('contactEmail')}</label>
                    <div>
                        <input class="input" required id="entry.1707085558" type="email" name="entry.1707085558"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label htmlFor="entry.148212086">{t('contactMessage')}</label>
                    <div>
                        <textarea required class="input textarea" id="entry.148212086" name="entry.148212086"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <input required type="checkbox" id="check"></input>
                    <label htmlFor="check">{t('contactAccept')}</label>
                </div>
                <div class="button-float-right">
                    <button type="submit" class="primary-button">
                        {t('contactSend')}
                    </button>
                </div>
            </form>,
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ "display": "none" }}></iframe>
        ]
    }

    renderFormSubmited() {
        return (
            <div class={`text-center form-submited ${this.formSubmited && 'form-submited-show'}`}>
                <h4>{t('contactSubmited')}</h4>
            </div>
        );
    }

    render() {
        return (
            <div class="container contact-component" id="contact">
                <h1 class="text-center">{t('contactGetInTouch')}</h1>
                {this.renderForm()}
                {this.renderFormSubmited()}
            </div>
        )
    }
}