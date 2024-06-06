export interface Discussion {
    id: string;
    text: string;
    user_id?: string;
    image?: string;
    hashtags?: string[];
    createdOn: string;
    viewCount?: number;
    comments?: Comment[];
    likeCount?: number;
}

export interface Comment {
    id: string;
    discussionId: string;
    userId: string;
    text: string;
    createdOn: string;
    likeCount?: number;
    replies?: Comment[];
}
