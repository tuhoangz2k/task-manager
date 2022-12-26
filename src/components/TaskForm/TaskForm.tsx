import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd';
import { ButtonWrap, FormStyled } from './TaskForm.styled';
const { TextArea } = Input;
type SizeType = Parameters<typeof Form>[0]['size'];

type Props = {
    task?: any;
};

const TaskForm: React.FC<Props> = ({ task }) => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    console.log();
    const handleSubmit = (e: any) => {
        // console.log(new Date(e.plannedEnd).getTime());
        console.log(e);
    };
    console.log(task);
    return (
        <>
            <FormStyled
                onFinish={handleSubmit}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                size={componentSize as SizeType}
                style={{ background: 'white' }}
            >
                <Form.Item label="Title" name="title">
                    <Input />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Priority" name="priority">
                    <Select>
                        <Select.Option value="low">Low</Select.Option>
                        <Select.Option value="High">High</Select.Option>
                        <Select.Option value="medium">Medium</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Status" name="status">
                    <Select>
                        <Select.Option value="notStart">Not Start</Select.Option>
                        <Select.Option value="completed">Completed</Select.Option>
                        <Select.Option value="todo">To do</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Planned end" name="plannedEnd">
                    <DatePicker picker="date" />
                </Form.Item>
                <Form.Item label="Progress" name="progress">
                    <InputNumber />
                </Form.Item>
                <ButtonWrap>
                    <Button type="primary" htmlType="submit">
                        Button
                    </Button>
                </ButtonWrap>
            </FormStyled>
        </>
    );
};

export default TaskForm;
