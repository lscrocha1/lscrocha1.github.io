import { Post, PostDisplayTypeEnum } from "./types";

export class DataService {
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