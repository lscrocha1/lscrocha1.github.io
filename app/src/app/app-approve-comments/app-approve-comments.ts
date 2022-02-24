import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { CommentToBeApprovedDto } from '../base/types';
import appApproveCommentsService from './app-approve-comments-service';

@Component({
    selector: 'app-approve-comments',
    templateUrl: './app-approve-comments.html',
    styleUrls: ['./app-approve-comments.scss', '../../common.css']
})
export class AppApproveComments extends BaseComponent {
    comments: CommentToBeApprovedDto[] = [{
        content: '',
        id: '',
        isReply: false,
        username: ''
    }];

    page: number = 1;

    limit: number = 50;

    currentPage: number = 1;

    hasNextPage: boolean = false;

    ngOnInit() {
        this.getComments();
    }

    async getComments() {
        let comments = await appApproveCommentsService.getCommentsToBeApproved(this.page, this.limit);

        let quantityLastFetch = comments.length;

        if (quantityLastFetch == 0 && this.currentPage > 1) {
            this.currentPage -= 1;

            await this.getComments();

            this.hasNextPage = false;

            return;
        }

        this.hasNextPage = this.limit == quantityLastFetch;

        this.comments = comments;
    }

    async approveDenyComment(commentId: string, approved: boolean, isReply: boolean) {
        if (confirm('This cannot be undone')) {
            await appApproveCommentsService.approveDenyComment({
                approved,
                isReply,
                commentId
            });

            await this.getComments();
        }
    }
}