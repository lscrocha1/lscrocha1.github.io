import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { Post, PostDisplayTypeEnum, Content, PostContentLanguageEnum } from '../base/types';
import appBlogService from './app-blog-service';
import { formatDate, goTo } from '../base/util';
import { ActivatedRoute } from '@angular/router';
import translationService from '../base/translation-service';
import { DataService } from '../base/data-service';

@Component({
    selector: 'app-blog',
    templateUrl: './app-blog.html',
    styleUrls: ['./app-blog.scss', '../../common.css']
})
export class AppBlog extends BaseComponent {
    posts: Post[] = [
        {
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
    ];

    postContents: Content[] = [
        {
            postId: '',
            body: '',
            description: '',
            id: '',
            language: PostContentLanguageEnum.English,
            title: ''
        }
    ]

    search: string = "";

    tag: number = 0;

    limit: number = 10;

    quantityLastFetch: number = 0;

    currentPage: number = 1;

    hasNextPage: boolean = false;

    constructor(private route: ActivatedRoute, private dataService: DataService) {
        super();
    }

    ngOnInit() {
        this.loadPosts();
    }

    getFormatedTitle(post: Post) {
        let title = this.postContents.find(e => e.postId == post.id)?.title;

        return title?.toLowerCase().replace(' ', '-').trim();
    }

    getTitle(post: Post) {
        return this.postContents.find(e => e.postId == post.id)?.title;
    }

    setPost(post: Post) {
        this.dataService.post = post;
    }

    getDescription(post: Post) {
        return this.postContents.find(e => e.postId == post.id)?.description;
    }

    searchByTag(tag: string) {
        goTo(`/blog/tags/${tag}`);
    }

    formatDate(date: string) {
        return formatDate(date);
    }

    getCommentText(quantity: number) {
        if (quantity <= 1)
            return this.t('blogSingleComment');

        return this.t('blogMultipleComments');
    }

    changePage(pageToAdd: number) {
        this.currentPage += pageToAdd;

        if (this.currentPage <= 0)
            this.currentPage = 1;

        this.loadPosts();
    }

    async loadPosts() {
        if (this.route.queryParams && (this.route.queryParams as any).value && (this.route.queryParams as any).value.tag)
            this.tag = (this.route.queryParams as any).value.tag;

        let posts = await appBlogService.getPosts(
            this.search,
            this.tag,
            this.currentPage,
            this.limit);

        this.quantityLastFetch = posts.length;

        if (this.quantityLastFetch == 0 && this.currentPage > 1) {
            this.currentPage -= 1;

            await this.loadPosts();

            this.hasNextPage = false;

            return;
        }

        this.hasNextPage = this.limit == this.quantityLastFetch;

        this.posts = posts;

        let currentLanguage = translationService.getCurrentSelectedLanguage();

        this.postContents = [];

        for (let post of posts) {
            let content = post.contents.find(e => e.language == (currentLanguage == "en" ? PostContentLanguageEnum.English : PostContentLanguageEnum.Portuguese))!;

            this.postContents.push({
                body: content.body,
                description: content.description,
                id: content.id,
                language: content.language,
                postId: post.id,
                title: content.title
            });
        }
    }
}