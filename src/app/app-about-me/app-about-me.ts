import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import translationService from '../base/translation-service';
import { Job } from '../base/types';

@Component({
    selector: 'app-about-me',
    templateUrl: './app-about-me.html',
    styleUrls: ['./app-about-me.scss', '../../common.css']
})
export class AppAboutMe extends BaseComponent {

    experienceAge = (new Date().getFullYear() - 2015).toString();

    jobs: Job[] = [];

    ngOnInit() {
        this.loadJobs();
    }

    async loadJobs() {
        let currentLanguage = translationService.getCurrentSelectedLanguage();

        this.jobs = await fetch(`/assets/translation/${currentLanguage}.json`).then(e => e.json()).then(e => e.jobs);
    }
}