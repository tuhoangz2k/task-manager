import React, { useEffect, useMemo, useState, ChangeEvent } from 'react';
import { useAppSelector } from 'app/hooks';
import { selectIsLogin } from 'features/userSlice';
import { Navigate } from 'react-router-dom';
import {
    ModalBoard,
    TaskBoardSider,
    TaskBoardWrapper,
    Container,
    TabsStyled,
} from './TaskBoard.styled';
import { Input, Layout, Menu, theme, TabsProps, Select } from 'antd';
import { items } from './../../constants';
import { tasksApi } from 'api/tasksApi';
import TaskList from './components/TaskList';
import Board from './components/Board';
const { Header, Content, Footer } = Layout;
const { Option } = Select;

type TaskBoardProps = {};

const TaskBoard: React.FC<TaskBoardProps> = ({}) => {
    const isLogin = useAppSelector(selectIsLogin);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [widthDevice, setWidthDevice] = useState(window.innerWidth);
    const [priority, setPriority] = useState('all');
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await tasksApi.getAll();
            setData(res.data);
        })();
    }, []);
    const newData = useMemo(() => {
        return data.filter(
            (task: any) =>
                (priority === 'all' || task.priority === priority) &&
                task.title.includes(searchInput),
        );
    }, [data, priority, searchInput]);

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
        setSearchInput(value);
    };
    const onChange = (key: string) => {
        console.log(key);
    };
    const handlePriorityChange = (e: string) => {
        setPriority(e);
    };
    if (!isLogin) return <Navigate to="/login" />;

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
                                            children: <TaskList data={newData} />,
                                        },
                                        {
                                            label: `Board`,
                                            key: 'Board',
                                            children: <Board />,
                                        },
                                        {
                                            label: `Calender`,
                                            key: 'calender',
                                            // children: <TaskList data={data} />,
                                            children: 'sa',
                                        },
                                    ]}
                                />
                                <Select
                                    defaultValue="all"
                                    style={{ width: 120 }}
                                    onChange={handlePriorityChange}
                                    options={[
                                        {
                                            value: 'all',
                                            label: 'All',
                                        },
                                        {
                                            value: 'low',
                                            label: 'Low',
                                        },
                                        {
                                            value: 'high',
                                            label: 'High',
                                        },
                                        {
                                            value: 'medium',
                                            label: 'Medium',
                                        },
                                    ]}
                                ></Select>
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
