export interface __Pagination<T> {
    num_of_pages: number;
    count: number;
    data: T[];
}
export interface __Response<T> {
    data: T;
    status: number;
}
export enum __Direction {
    rtl = 'rtl',
    ltr = 'ltr',
}
export interface __Attachment {
    id: number;
    alt: string;
    path: string;
    resized: string;
}
export interface __ImageAttachment {
    id: number;
    alt: string;
    image: string;
}

export enum __AuthStatus {
    valid = 'valid',
    invalid = 'invalid',
    pending = 'pending',
}
export interface __Tokens {
    access: string;
    is_active: boolean;
    refresh: string;
}

