import { Component, HostListener } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { isMobile, scrollTo } from '../base/util';

@Component({
    selector: 'app-navbar',
    templateUrl: './app-navbar.html',
    styleUrls: ['./app-navbar.scss']
})
export class AppNavbar extends BaseComponent {

    isMobile = isMobile();

    sticky: boolean = false;

    linkClick(elementId: string) {
        scrollTo(elementId);
    }

    @HostListener('window:scroll', ['$event'])
    onScrollChange() {
        if (window.pageYOffset >= window.outerHeight)
            this.sticky = true;
        else
            this.sticky = false;
    }
}