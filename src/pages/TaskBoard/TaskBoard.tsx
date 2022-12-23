import React, { useEffect, useMemo, useState } from 'react';

import {
    ModalBoard,
    TaskBoardSider,
    TaskBoardWrapper,
    Container,
    TabsStyled,
} from './TaskBoard.styled';
import { Input, Layout, Menu, theme, TabsProps } from 'antd';
import { items } from './../../constants';
import { tasksApi } from 'api/tasksApi';
import TaskList from './components/TaskList';
import Board from './components/Board';
const { Header, Content, Footer } = Layout;
type TaskBoardProps = {};

const TaskBoard: React.FC<TaskBoardProps> = ({}) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [widthDevice, setWidthDevice] = useState(window.innerWidth);
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await tasksApi.getAll();
            setData(res.data);
        })();
    }, []);
    const isMobile = useMemo(() => {
        return window.innerWidth < 740;
    }, [widthDevice]);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleTougleMenu = (collapsed?: boolean, type?: string) => {
        setWidthDevice(window.innerWidth);
        if (collapsed === false) {
            setIsOpenMenu(true);
        } else {
            setIsOpenMenu(false);
        }
    };

    const onSearch = (value: string) => {
        console.log(value);
    };
    const onChange = (key: string) => {
        console.log(key);
    };
    console.log(data);
    return (
        <>
            <TaskBoardWrapper>
                <TaskBoardSider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={handleTougleMenu}
                    collapsible={true}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                        onClick={({ key, keyPath, domEvent }) => {
                            console.log(key);
                        }}
                        items={items.map((item, index) => ({
                            key: item.key,
                            icon: item.icon,
                            label: item.label,
                        }))}
                    />
                    <div>content</div>
                </TaskBoardSider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Input.Search placeholder="search" onSearch={onSearch} />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                            }}
                        >
                            <Container>
                                <TabsStyled
                                    defaultActiveKey="1"
                                    onChange={onChange}
                                    items={[
                                        {
                                            label: `List`,
                                            key: 'ListTask',
                                            children: <TaskList data={data} />,
                                        },
                                        {
                                            label: `Board`,
                                            key: 'Board',
                                            children: <Board />,
                                        },
                                        {
                                            label: `Calender`,
                                            key: 'calender',
                                            children: <TaskList data={data} />,
                                        },
                                    ]}
                                />
                            </Container>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </TaskBoardWrapper>

            {isOpenMenu && isMobile && <ModalBoard />}
        </>
    );
};

export default TaskBoard;
