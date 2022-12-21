import React from 'react';
import { Input } from 'antd';
import { InputContainer, InputLabel, ErrorMessage } from './InputField.styled';
import { Controller } from 'react-hook-form';
type Props = {
    label?: string;
    id?: string;
    prefix: React.ReactNode;
    placeholder: string;
    size: 'small' | 'middle' | 'large';
    name: string;
    error?: any;
    type?: 'Password' | 'Search';
    control?: any;
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
    control,
}) => {
    const TypeInput = type ? Input[type] : Input;

    return (
        <InputContainer>
            {label && <InputLabel htmlFor={id}>{label}</InputLabel>}

            {type ? (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <TypeInput
                            {...field}
                            size={size}
                            placeholder={placeholder}
                            prefix={prefix}
                            id={id}
                        />
                    )}
                />
            ) : (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            size={size}
                            placeholder={placeholder}
                            prefix={prefix}
                            id={id}
                        />
                    )}
                />
            )}

            {error[name] && <ErrorMessage>{error[name].message}</ErrorMessage>}
        </InputContainer>
    );
};

export default InputField;
