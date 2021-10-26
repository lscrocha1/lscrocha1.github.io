import { Component, HostListener } from '@angular/core';
import { BaseComponent } from '../base/base-component';

@Component({
    selector: 'app-navbar',
    templateUrl: './app-navbar.html',
    styleUrls: ['./app-navbar.scss']
})
export class AppNavbar extends BaseComponent {

    sticky: boolean = false;

    @HostListener('window:scroll', ['$event'])
    onScrollChange() {
        if (window.pageYOffset >= window.outerHeight)
            this.sticky = true;
        else
            this.sticky = false;
    }
}