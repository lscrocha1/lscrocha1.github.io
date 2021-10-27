import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.html',
    styleUrls: ['./app-footer.scss']
})
export class AppFooter extends BaseComponent {
    year: number = new Date().getFullYear();
}