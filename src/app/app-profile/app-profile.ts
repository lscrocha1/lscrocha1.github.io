import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';

@Component({
    selector: 'app-profile',
    templateUrl: './app-profile.html',
    styleUrls: ['./app-profile.scss']
})
export class AppProfile extends BaseComponent {
    companyLink: string = 'https://www.nava.com.br/';
}
