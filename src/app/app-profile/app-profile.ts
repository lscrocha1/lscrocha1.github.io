import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import translationService from '../base/translation-service';
import { isMobile, scrollTo } from '../base/util';

@Component({
    selector: 'app-profile',
    templateUrl: './app-profile.html',
    styleUrls: ['./app-profile.scss']
})
export class AppProfile extends BaseComponent {
    isMobile = isMobile();

    currentLanguage = translationService.getCurrentSelectedLanguage();

    companyLink: string = 'https://www.programmers.com.br/';

    linkClick(elementId: string) {
        scrollTo(elementId);
    }

    changeLanguage() {
        translationService.setLanguage(this.currentLanguage == 'en' ? 'pt-BR' : 'en');

        location.reload();
    }
}
