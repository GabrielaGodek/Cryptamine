
export interface UserRequestBody {
    email: string;
    password: string;
    username?: string;
    created_at?: string;
}
export interface User {
    id: number;
    email: string;
    password: string;
}

export interface DBConfig {
    host: string,
    user: string,
    password: string,
    database: string,
}
// export interface PoolConfig {
//     host: string,
//     user: string,
//     password: string,
//     database: string,
// }
