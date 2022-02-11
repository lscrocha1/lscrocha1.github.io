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

    currentLanguage = translationService.getCurrentSelectedLanguage();

    downloadLink = `/assets/cv/cv-${translationService.getCurrentSelectedLanguage()}.pdf`;

    experienceAge = (new Date().getFullYear() - 2016).toString();

    jobs: Job[] = [];

    ngOnInit() {
        this.loadJobs();
    }

    async loadJobs() {
        this.jobs = await fetch(`/assets/translation/${this.currentLanguage}.json`).then(e => e.json()).then(e => e.jobs);
    }
}