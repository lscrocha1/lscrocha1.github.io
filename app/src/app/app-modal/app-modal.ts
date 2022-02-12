import { Component } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: 'app-modal.html',
    styleUrls: ['app-modal.scss'],
})
export class AppModal {
    show: boolean = false;

    toggle() {
        this.show = !this.show;
    }
}