import { IMAGES } from '../../constants';
import styled from 'styled-components';

export const LoginPageWrap = styled.div`
    font-size: 18px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: url(${IMAGES.backgroundUrl});
    background-repeat: no-repeat;
    background-size: cover;
`;
export const LoginFormWrap = styled.div`
    width: 27.77777777777778em;
`;
