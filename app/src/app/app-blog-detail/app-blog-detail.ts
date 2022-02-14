import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { ActivatedRoute } from '@angular/router';
import appBlogService from '../app-blog/app-blog-service';
import { PostDto } from '../base/types';
import { formatDate, formatDateWithHour, scrollTo } from '../base/util';
import EditorJS from '@editorjs/editorjs';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './app-blog-detail.html',
    styleUrls: ['./app-blog-detail.scss', '../../common.css', '../app-contact/app-contact.scss']
})
export class AppBlogDetail extends BaseComponent {

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute) {
        super();
    }

    addCommentForm = this.formBuilder.group({
        name: '',
        content: ''
    });

    post: PostDto = {
        comments: [],
        content: '',
        createdAt: '',
        description: '',
        id: 0,
        imageDisplay: '',
        images: [],
        tags: [],
        title: '',
        updatedAt: ''
    };

    editorId: string = 'div-content-id';

    addingComment: boolean = false;

    replyingComment: boolean = false;

    selectedCommentId: number = 0;

    replyingToId?: number = undefined;

    formatDate(date: string) {
        return formatDate(date);
    }

    formatDateWithHour(date: string) {
        return formatDateWithHour(date);
    }

    ngOnInit() {
        this.loadPost();
    }

    scrollToAddComment() {
        this.addingComment = true;

        setTimeout(() => scrollTo('add-comment'), 200);
    }

    showReplyComment(commentId: number) {
        this.selectedCommentId = commentId;

        this.addingComment = false;
        this.replyingComment = true;

        setTimeout(() => scrollTo('add-comment'), 200);
    }

    showReplyToReply(commentId: number, replyId: number) {
        this.replyingToId = replyId;
        this.selectedCommentId = commentId;

        this.addingComment = false;
        this.replyingComment = true;

        setTimeout(() => scrollTo('add-comment'), 200);
    }

    replyingTo(commentId: number, replyId?: number) {
        if (!replyId)
            return null;

        return this.post.comments.find(e => e.id == commentId)?.replies.find(e => e.id == replyId)?.userName;
    }

    async replyComment() {
        this.addingComment = false;

        this.replyingComment = false;

        await appBlogService.replyComment(this.post.id, this.selectedCommentId, {
            content: this.addCommentForm.controls['content'].value,
            userName: this.addCommentForm.controls['name'].value,
            replyingToId: this.replyingToId
        });
        
        this.replyingToId = undefined;

        this.selectedCommentId = 0;

        this.addCommentForm.reset();

        await this.loadPost();
    }

    loadContent() {
        let _ = new EditorJS({
            holder: this.editorId,
            readOnly: true,
            //data: {}
        });
    }

    async loadPost() {
        let id = this.route.snapshot.paramMap.get('id');

        if (!id) {
            location.href = "/#/404";

            return;
        }

        this.post = await appBlogService.getPost(id);

        this.loadContent();
    }

    async addComment() {
        this.addingComment = false;

        await appBlogService.addComment(this.post.id, {
            content: this.addCommentForm.controls['content'].value,
            userName: this.addCommentForm.controls['name'].value
        });

        this.addCommentForm.reset();

        await this.loadPost();
    }
}