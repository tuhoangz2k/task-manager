import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginFormContainer, InputWrapper } from './LoginForm.styled';
import InputField from 'components/InputField';

type Props = {};

const LoginForm: React.FC<Props> = ({}) => {
    return (
        <LoginFormContainer>
            <InputWrapper>
                <InputField
                    label="User name"
                    name="username"
                    placeholder="enter your username"
                    prefix={<UserOutlined />}
                    size="large"
                    id="username"
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
                />
            </InputWrapper>
        </LoginFormContainer>
    );
};

export default LoginForm;
