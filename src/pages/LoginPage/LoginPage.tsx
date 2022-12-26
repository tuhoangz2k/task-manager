import React, { useRef } from 'react';
import { LoginFormWrap, LoginPageWrap } from './LoginPage.styled';
import LoginForm from './components/LoginForm';

type Props = {};

const LoginPage: React.FC = (props: Props) => {
    return (
        <LoginPageWrap>
            <LoginFormWrap>
                <LoginForm />
            </LoginFormWrap>
        </LoginPageWrap>
    );
};

export default LoginPage;
