export interface FetchState<T> {
    loading: boolean;
    error: string;
    data: T | null;
}