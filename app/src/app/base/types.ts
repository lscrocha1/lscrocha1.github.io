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
}