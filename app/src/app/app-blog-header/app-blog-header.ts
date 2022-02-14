import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import translationService from '../base/translation-service';

@Component({
    selector: 'app-blog-header',
    templateUrl: './app-blog-header.html',
    styleUrls: ['./app-blog-header.scss', '../../common.css']
})
export class AppBlogHeader extends BaseComponent {
    currentLanguage = translationService.getCurrentSelectedLanguage();

    changeLanguage() {
        translationService.setLanguage(this.currentLanguage == 'en' ? 'pt-BR' : 'en');

        location.reload();
    }
}