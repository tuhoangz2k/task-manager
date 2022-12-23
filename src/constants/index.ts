import React from 'react';
import TaskList from '../pages/TaskBoard/components/TaskList';

import {
    UploadOutlined,
    VideoCameraOutlined,
    UserOutlined,
    TeamOutlined,
    FileAddOutlined,
} from '@ant-design/icons';
export * from './scheme';
export const user = {};
const IMAGES = {
    backgroundUrl:
        'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/background-dep-don-gian-ve-vu-tru-hd.jpg',
};
export { IMAGES };
export const COLORS = {
    violet: ' #6c63ff',
};
export type MenuItems = {
    label: React.ReactNode;
    key: React.Key;
    icon?: React.ReactNode;
    children?: any;
};
export const items: Array<MenuItems> = [
    { label: 'Team', key: 1, icon: React.createElement(TeamOutlined) },
    { label: 'User', key: 2, icon: React.createElement(UserOutlined) },
    { label: 'Upload', key: 3, icon: React.createElement(FileAddOutlined) },
    { label: 'Upload', key: 4, icon: React.createElement(FileAddOutlined) },
];

export const TabsItems = [
    {
        label: `List`,
        key: '1',
        children: TaskList,
    },
    {
        label: `Grid`,
        key: '2',
        children: TaskList,
    },
    {
        label: `Calender`,
        key: '3',
        children: TaskList,
    },
];
