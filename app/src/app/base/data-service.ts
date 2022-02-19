import { Post, PostDisplayTypeEnum } from "./types";

export class DataService {
    postKey: string = 'lscrocha-blog-post';

    setPost(post: Post) {
        this.post = post;

        localStorage.setItem(this.postKey, JSON.stringify(post));
    }

    getPost() {
        if (this.post && this.post.id)
            return this.post;

        let post = localStorage.getItem(this.postKey);

        if (!post)
            return null;

        return JSON.parse(post);
    }

    constructor() {
        this.post = {
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
    }

    post: Post;
}