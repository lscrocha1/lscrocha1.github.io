export interface Translations {
    [key: string]: string;
}

export interface Job {
    title: string;
    company: string;
    period: string;
    companyLink: string;
    description: string;
}

export interface PostsDto {
    postId: number;
    title: string;
    description: string;
    imageDisplay: string;
    createdAt: string;
    quantityComments: number;
    tags: TagDto[];
}

export interface PostDto {
    id: number;
    title: string;
    description: string;
    imageDisplay: string;
    content: string;
    createdAt: string;
    updatedAt: string | null;
    tags: TagDto[];
    images: ImageDto[];
    comments: CommentDto[];
}

export interface TagDto {
    id: number;
    name: string;
}

export interface ImageDto {
    id: number;
    link: string;
}

export interface CommentDto {
    id: number;
    userName: string;
    content: string;
    createdAt: string;
    replies: ReplyDto[];
}

export interface AddCommentDto {
    userName: string;
    content: string;
}

export interface ReplyCommentDto {
    userName: string;
    content: string;
    replyingToId?: string;
}

export interface ReplyDto {
    id: number;
    userName: string;
    content: string;
    createdAt: string;
    replyingToId?: number;
}

export interface Post {
    id: string;
    displayType: PostDisplayTypeEnum;
    display: string;
    createdAt: string;
    updatedAt: string | null;
    contents: Content[];
    images: Image[];
    comments: Comment[];
    tags: Tag[];
}

export interface Content {
    postId: string;
    id: string;
    title: string;
    body: string;
    description: string;
    language: PostContentLanguageEnum;
}

export interface Image {
    id: string;
    link: string;
    type: PostDisplayTypeEnum;
}

export interface Comment {
    id: string;
    userName: string;
    content: string;
    createdAt: string;
    replies: Reply[];
    approved: boolean;
}

export interface Tag {
    id: string;
    name: string;
}

export interface Reply {
    id: string;
    userName: string;
    content: string;
    createdAt: string;
    replyingToId: string | null;
    approved: boolean;
}

export enum PostContentLanguageEnum {
    Portuguese = 1,
    English = 2
}

export enum PostDisplayTypeEnum {
    Youtube = 1,
    Image = 2
}