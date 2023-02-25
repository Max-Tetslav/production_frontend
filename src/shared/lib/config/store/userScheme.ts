export interface User {
    id: number;
    username: string | null;
}

export interface UserScheme {
    user: User | null;
}
