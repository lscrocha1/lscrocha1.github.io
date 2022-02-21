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
    ptUrl: string;
    enUrl: string;
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

export interface CreatePostDto {
    displayType: PostDisplayTypeEnum;
    display: string;
    contents: ContentDto[];
    images: ImageDto[];
    tags: TagDto[];
}

export interface ContentDto {
    title: string;
    body: string;
    description: string;
    language: PostContentLanguageEnum;
}

export interface ImageDto {
    link: string;
    type: PostDisplayTypeEnum;
}

export interface TagDto {
    name: string;
}