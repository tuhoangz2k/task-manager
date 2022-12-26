import React from 'react';
import { Space, Table, Tag, Progress } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ColumnTitle, TitleItem } from './TaskList.styled';
import { ITaskTable } from 'Models';

type Props = {
    data?: Array<ITaskTable>;
};
const columns: ColumnsType<ITaskTable> = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'taskId',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Progress',
        dataIndex: 'progress',
        key: 'progress',
        render: (value) => <Progress type="circle" percent={value} width={40} />,
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag, i) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'dev') {
                        color = 'deeppink';
                    }
                    return (
                        <Tag color={color} key={`${tag}${i}${Math.random()}}`}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Priority',
        key: 'priority',
        dataIndex: 'priority',
    },

    {
        title: 'plannedEnd',
        key: 'plannedEnd',
        render: (value, { plannedEnd }) => (
            <span>{new Date(plannedEnd).toLocaleDateString()}</span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const TaskList: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default TaskList;
