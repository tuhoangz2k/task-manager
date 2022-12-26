import React, { useState } from 'react';
import { Space, Table, Tag, Progress } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ColumnTitle, FormWrap, ModalForm, TitleItem } from './TaskList.styled';
import { ITaskTable } from 'Models';
import { tasksApi } from 'api/tasksApi';
import TaskForm from 'components/TaskForm';

type Props = {
    data?: Array<ITaskTable>;
};
const handleDelete = async (id: string | number) => {
    await tasksApi.deleteUserByid(id);
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
                <a onClick={() => handleDelete(record.id)}>Delete</a>
            </Space>
        ),
    },
];

const TaskList: React.FC<Props> = ({ data }) => {
    const [isOpenForm, setIsOpenForm] = useState(false);
    const handleOpenForm = (e: any) => {
        setIsOpenForm(true);
    };
    return (
        <>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
            {isOpenForm && (
                <ModalForm>
                    <FormWrap>
                        <TaskForm />
                    </FormWrap>
                </ModalForm>
            )}
        </>
    );
};

export default TaskList;
