import styled from 'styled-components';
import { Layout, Tabs } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export const TaskBoardWrapper = styled(Layout)`
    min-height: 100vh;
`;
export const TaskBoardSider = styled(Sider)`
    position: relative;
    z-index: 10;
`;

export const ModalBoard = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
`;

export const TabsStyled = styled(Tabs)`
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    overflow-x: scroll;
`;
