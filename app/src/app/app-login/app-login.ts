import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import authService from '../base/auth-service';
import { BaseComponent } from '../base/base-component';
import { goTo } from '../base/util';
import appLoginService from './app-login-service';

@Component({
    selector: 'app-login',
    templateUrl: './app-login.html',
    styleUrls: ['./app-login.scss', '../../common.css', '../app-contact/app-contact.scss']
})
export class AppLogin extends BaseComponent {
    constructor(private formBuilder: FormBuilder) {
        super();
    }

    form = this.formBuilder.group({
        login: '',
        password: ''
    });

    hasError: boolean = false;

    async submit() {
        let result = await appLoginService.login({
            username: this.form.controls['login'].value,
            password: this.form.controls['password'].value
        });

        if (!result) {
            this.hasError = true;
            return;
        }

        authService.setToken(result);
        goTo('/new-post');
    }
}