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
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { login, selectIsLogin } from 'features/userSlice';
import { Navigate } from 'react-router-dom';

type Props = {};

const LoginForm: React.FC<Props> = ({}) => {
    const isLogin = useAppSelector(selectIsLogin);

    const dispatch = useAppDispatch();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ILoginForm>({
        resolver: yupResolver(loginSchema),
    });
    const handleSubmitLogin = (value: ILoginForm) => {
        console.log(value);
        dispatch(login(value));
        // eslint-disable-next-line react-hooks/rules-of-hooks
    };
    if (!!isLogin) return <Navigate to="/dashboard" />;
    return (
        <LoginFormContainer onSubmit={handleSubmit(handleSubmitLogin)}>
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
