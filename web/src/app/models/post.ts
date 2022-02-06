import { Author } from "./author";
import { Blog } from "./blog";
import { Comments } from "./comments";

export interface Post {
    kind: string;
    id: string;
    blog: Blog;
    published: Date;
    updated: Date;
    url: string;
    selfLink: string;
    title: string;
    content: string;
    author: Author;
    replies: Comments;
    location: Location;
    etag: string;
    labels: string[];
}
