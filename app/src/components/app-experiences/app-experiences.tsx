import { Component, h, State } from "@stencil/core";
import translationService, { t } from "../../base/translation-service";
import { Job } from "../../base/types";

@Component({
    tag: 'app-experiences',
    styleUrl: 'app-experiences.scss'
})
export class AppExperiences {
    @State() jobs: Job[] = [];

    currentLanguage = translationService.getCurrentLanguage();

    componentWillLoad() {
        this.loadJobs();
    }

    async loadJobs() {
        this.jobs = await fetch(`/assets/translation/${this.currentLanguage}.json`).then(e => e.json()).then(e => e.jobs);
    }

    renderJob(job: Job) {
        return (
            <div class="job">
                <div>
                    <h3>{job.title}</h3>
                </div>
                <div>
                    <a class="job-link" rel="nofollow noreferrer noopener external" href={job.companyLink}><h4>{job.company}</h4></a>
                </div>
                <div>
                    <h5>
                        <span class="iconify iconify-calendar" data-icon="mdi:calendar-text"></span>
                        {job.period}
                    </h5>
                </div>
                <div>
                    <h3 class="job-description">{job.description}</h3>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div class="container">
                <h1 class="text-center-mobile">{t('experiencesTitle')}</h1>
                {this.jobs && this.jobs.map(job => this.renderJob(job))}
            </div>
        )
    }
}