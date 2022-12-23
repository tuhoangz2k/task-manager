import React, { useEffect, useMemo, useState } from 'react';

import {
    ModalBoard,
    TaskBoardSider,
    TaskBoardWrapper,
    Container,
    TabsStyled,
} from './TaskBoard.styled';
import { Input, Layout, Menu, theme } from 'antd';
import { items } from './../../constants';
import { tasksApi } from 'api/tasksApi';
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
    console.log(data);
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
                                            key: '1',
                                            children: <div>this is tab 1</div>,
                                        },
                                        {
                                            label: `Grid`,
                                            key: '2',
                                            children: <div>this is tab 2</div>,
                                        },
                                        {
                                            label: `Calender`,
                                            key: '3',
                                            children: <div>this is tab 3</div>,
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
