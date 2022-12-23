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
};
