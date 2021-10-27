import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-contact',
    templateUrl: './app-contact.html',
    styleUrls: ['./app-contact.scss', '../../common.css']
})
export class AppContact extends BaseComponent {
    formSubmited: boolean = false;

    contactForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        super();

        this.contactForm = this.formBuilder.group({
            name: [''],
            email: [''],
            message: ['']
        });
    }

    onSubmit() {
        this.formSubmited = true;
    }
}