interface FetchOperations<T> {
    getAll(url:string): Promise<T[]>;
    getDetails(id: number): Promise<T>;
}