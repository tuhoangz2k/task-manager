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
type Priority = 'medium' | 'low' | 'high';
export interface ITaskTable {
    id: string | number;
    title: string;
    priority: Priority;
    status: string;
    progress: number;
}
export type TokenType = Pick<IUser, 'username' | 'password'>;
