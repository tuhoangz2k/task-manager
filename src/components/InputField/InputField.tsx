import React from 'react';
import { Input } from 'antd';
import { InputContainer, InputLabel, ErrorMessage } from './InputField.styled';

type Props = {
    label?: string;
    id?: string;
    prefix: React.ReactNode;
    placeholder: string;
    size: 'small' | 'middle' | 'large';
    name: string;
    error?: any;
    type?: 'Password' | 'Search';
};

const InputField: React.FC<Props> = ({
    label,
    id,
    prefix,
    placeholder,
    size = 'middle',
    name,
    error,
    type,
}) => {
    const TypeInput = type ? Input[type] : Input;

    return (
        <InputContainer>
            {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
            {type ? (
                <TypeInput
                    size={size}
                    placeholder={placeholder}
                    prefix={prefix}
                    id={id}
                    name={name}
                />
            ) : (
                <Input
                    size={size}
                    placeholder={placeholder}
                    prefix={prefix}
                    id={id}
                    name={name}
                />
            )}
            <ErrorMessage>tai khoan hoac mat khau khong dung</ErrorMessage>
        </InputContainer>
    );
};

export default InputField;
