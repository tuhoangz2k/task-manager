import { COLORS } from '../../../../constants';
import styled from 'styled-components';
import { Button } from 'antd';
export const LoginFormContainer = styled.form`
    min-height: 23.333333333333332em;
    padding-top: 4.444444444444445em;
    position: relative;
`;
export const InputWrapper = styled.div`
    overflow: hidden;
    margin-bottom: 1.1111111111111112em;
`;

export const LoginText = styled.h2`
    position: absolute;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
    font-weight: bold;
    font-size: 20px;
    color: white;
`;

export const LoginButton = styled.button`
    border: unset;
    background-color: ${COLORS.violet};
    height: 3em;
    width: 100%;
    cursor: pointer;
    font-weight: 700;
    transition: all 0.4s linear;
    color: white;
    border-radius: 6px;
    &:hover {
        opacity: 0.6;
    }
    @media (min-width: 1024px) {
        width: 11.11111111111111em;
        margin-left: 50%;
        transform: translateX(-50%);
    }
`;
