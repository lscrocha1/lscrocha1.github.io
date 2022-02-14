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

export interface ListPostDto {
    postId: number;
    title: string;
    description: string;
    imageDisplay: string;
    createdAt: string;
    quantityComments: number;
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
}