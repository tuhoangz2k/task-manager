import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../../constants';
import { ILoginForm } from 'Models';
import {
    LoginFormContainer,
    InputWrapper,
    LoginText,
    LoginButton,
} from './LoginForm.styled';
import InputField from 'components/InputField';

type Props = {};

const LoginForm: React.FC<Props> = ({}) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ILoginForm>({
        resolver: yupResolver(loginSchema),
    });
    const handleSumitLogin = (e: any) => {
        console.log(e);
    };
    return (
        <LoginFormContainer onSubmit={handleSubmit(handleSumitLogin)}>
            <LoginText>Login</LoginText>
            <InputWrapper>
                <InputField
                    label="User name"
                    name="username"
                    placeholder="enter your username"
                    prefix={<UserOutlined />}
                    size="large"
                    id="username"
                    control={control}
                    error={errors}
                />
            </InputWrapper>
            <InputWrapper>
                <InputField
                    label="password"
                    name="password"
                    placeholder="enter your password"
                    prefix={<LockOutlined />}
                    size="large"
                    id="password"
                    type="Password"
                    control={control}
                    error={errors}
                />
            </InputWrapper>
            <LoginButton type="submit">Login</LoginButton>
        </LoginFormContainer>
    );
};

export default LoginForm;
