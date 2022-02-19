import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { ActivatedRoute } from '@angular/router';
import appBlogService from '../app-blog/app-blog-service';
import { Content, Post, PostContentLanguageEnum, PostDisplayTypeEnum } from '../base/types';
import { formatDate, formatDateWithHour, goTo, scrollTo } from '../base/util';
import EditorJS from '@editorjs/editorjs';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../base/data-service';
import translationService from '../base/translation-service';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './app-blog-detail.html',
    styleUrls: ['./app-blog-detail.scss', '../../common.css', '../app-contact/app-contact.scss']
})
export class AppBlogDetail extends BaseComponent {

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private dataService: DataService) {
        super();
    }

    addCommentForm = this.formBuilder.group({
        name: '',
        content: ''
    });

    post: Post = {
        comments: [],
        contents: [],
        createdAt: '',
        display: '',
        displayType: PostDisplayTypeEnum.Image,
        id: '',
        images: [],
        tags: [],
        updatedAt: ''
    }

    editorId: string = 'div-content-id';

    addingComment: boolean = false;

    replyingComment: boolean = false;

    selectedCommentId: string = '';

    replyingToId?: string = undefined;

    commentSubmited: boolean = false;

    formatDate(date: string) {
        return formatDate(date);
    }

    formatDateWithHour(date: string) {
        return formatDateWithHour(date);
    }

    ngOnInit() {
        this.loadPost();
    }

    getTitle() {
        let postContent = this.getPostContent();

        if (!postContent)
            return '';

        return postContent?.title;
    }

    getDescription() {
        let postContent = this.getPostContent();

        if (!postContent)
            return '';

        return postContent.description;
    }

    getBody() {
        let postContent = this.getPostContent();

        if (!postContent)
            return '';

        return postContent.body;
    }

    getPostContent(): Content {
        let currentLanguage = translationService.getCurrentSelectedLanguage();

        return this
            .post
            .contents
            .find(e => e.language ==
                (currentLanguage == "en"
                    ? PostContentLanguageEnum.English
                    : PostContentLanguageEnum.Portuguese))!;
    }

    cancelComment() {
        this.addingComment = false;
        this.replyingComment = false;
        this.commentSubmited = false;
    }

    searchByTag(tagId: string) {
        goTo(`/blog/tags/${tagId}`);
    }

    scrollToAddComment() {
        this.addingComment = true;

        this.commentSubmited = false;

        setTimeout(() => scrollTo('add-comment'), 200);
    }

    showReplyComment(commentId: string) {
        this.selectedCommentId = commentId;

        this.addingComment = false;
        this.replyingComment = true;

        this.commentSubmited = false;

        setTimeout(() => scrollTo('add-comment'), 200);
    }

    showReplyToReply(commentId: string, replyId: string) {
        this.replyingToId = replyId;
        this.selectedCommentId = commentId;

        this.commentSubmited = false;

        this.addingComment = false;
        this.replyingComment = true;

        setTimeout(() => scrollTo('add-comment'), 200);
    }

    replyingTo(commentId: string, replyId?: string) {
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

        this.selectedCommentId = '';

        this.addCommentForm.reset();

        this.commentSubmited = true;

        scrollTo('comment-submited');
    }

    loadContent() {
        let _ = new EditorJS({
            holder: this.editorId,
            readOnly: true,
            //data: {}
        });
    }

    async loadPost() {
        this.post = this.dataService.getPost();
    }

    async addComment() {
        this.addingComment = false;

        await appBlogService.addComment(this.post.id, {
            content: this.addCommentForm.controls['content'].value,
            userName: this.addCommentForm.controls['name'].value
        });

        this.addCommentForm.reset();

        this.commentSubmited = true;

        scrollTo('comment-submited');
    }
}