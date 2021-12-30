import { Component, HostListener } from '@angular/core';
import { BaseComponent } from '../base/base-component';

@Component({
    selector: 'app-contact',
    templateUrl: './app-contact.html',
    styleUrls: ['./app-contact.scss', '../../common.css']
})
export class AppContact extends BaseComponent {
    formSubmited: boolean = false;

    @HostListener('submit', ['$event'])
    onSubmit() {
        this.formSubmited = true;
    }
}