export interface RedditPostState<T> {
    loading: boolean;
    error: string;
    data: T | null;
}