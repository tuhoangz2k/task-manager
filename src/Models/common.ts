export interface ILoginForm {
    usernames: string;
    password: string;
}
export interface IUser {
    id?: string | number;
    username: string;
    password: string;
    token: string;
    taskList: Array<any>;
}
export interface ITaskList {
    title: string;
}
export type TokenType = Pick<IUser, 'username' | 'password'>;
