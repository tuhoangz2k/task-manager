import apiClient from './apiClient';

export const tasksApi = {
    getAll(params?: any) {
        const url = '/tasks';
        return apiClient.get(url, { params });
    },
    get(id: number | string) {
        const url = `/tasks/${id}`;
        return apiClient.get(url);
    },
    deleteUserByid(id: number | string) {
        const url = `/tasks/${id}`;
        return apiClient.delete(url);
    },
    editUserById(id: number | string, data: any) {
        const url = `/tasks/${id}`;
        return apiClient.patch(url, data);
    },
    addUser(data: any) {
        const url = `/tasks`;
        return apiClient.post(url, data);
    },
};
