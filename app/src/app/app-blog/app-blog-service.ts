import authService from "../base/auth-service";
import translationService from "../base/translation-service";
import { AddCommentDto, ReplyCommentDto, Post, CreatePostDto } from "../base/types";
import { goTo } from "../base/util";
import env from "../env/env";

class AppBlogService {
    async getPosts(search: string = "", tag: number = 0, page: number = 1, limit: number = 10): Promise<Post[]> {
        let url = `${env.apiurl}/v1/post?page=${page}&limit=${limit}`;

        if (search)
            url = `${url}&search=${search}`;

        if (tag > 0)
            url = `${url}&tag=${tag}`;

        let response = await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json'
            }
        });

        if (response.status != 200)
            return [];

        return await response.json();
    }

    async getPost(postId: string): Promise<Post> {
        let url = `${env.apiurl}/v1/post/${postId}`;

        let response = await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json'
            }
        });

        if (response.status != 200)
            goTo("/404");

        return await response.json();
    }

    async addComment(postId: string, dto: AddCommentDto) {
        let url = `${env.apiurl}/v1/comment/${postId}`;

        await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(dto)
        });
    }

    async replyComment(postId: string, commentId: string, dto: ReplyCommentDto) {
        let url = `${env.apiurl}/v1/comment/post/${postId}/comment/${commentId}`;

        await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(dto)
        });
    }

    async createPost(dto: any) {
        let url = `${env.apiurl}/v1/post`;

        let result = await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Authorization': authService.getToken(),
                'UUID': prompt('UUID') ??''
            },
            method: 'POST',
            body: dto
        });

        if (result.status == 401)
            goTo('/login');
    }

    async saveImage(formData: any) {
        let url = `${env.apiurl}/v1/image`;

        let response = await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Authorization': authService.getToken(),
                'UUID': prompt('UUID') ??''
            },
            method: 'POST',
            body: formData
        });

        if (response.status == 401)
            goTo('/login');

        let result = await response.text();

        return result;
    }
}

export default new AppBlogService();