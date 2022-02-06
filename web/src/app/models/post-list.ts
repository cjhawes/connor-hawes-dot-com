import { Post } from "./post";

export interface PostList {
    kind: string;
    items: Post[];
    etag: string;
}
