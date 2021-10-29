import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { isMobile, scrollTo } from '../base/util';

@Component({
    selector: 'app-profile',
    templateUrl: './app-profile.html',
    styleUrls: ['./app-profile.scss']
})
export class AppProfile extends BaseComponent {
    isMobile = isMobile();

    companyLink: string = 'https://www.nava.com.br/';

    linkClick(elementId: string) {
        scrollTo(elementId);
    }
}
