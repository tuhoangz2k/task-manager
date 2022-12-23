import React from 'react';
import { ColumnTitle, TitleItem } from './TaskList.styled';

type Props = {
    data?: Array<any>;
};

const titleList = ['title', 'id', 'progress', 'status', 'plane', 'priority'];

const TaskList: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <ColumnTitle>
                {titleList.map((title, index) => (
                    <TitleItem key={index}>{title}</TitleItem>
                ))}
            </ColumnTitle>
            {data?.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default TaskList;
