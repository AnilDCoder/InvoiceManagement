import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DashboardFilled,
    ProfileFilled,
} from '@ant-design/icons';
import Home from './pages/Home';
import Profile from './pages/Profile';

const { Header, Sider, Content } = Layout;

const Router = () => {
    const [collapsed, setcollapsed] = useState(false)
    const toggle = () => {
        setcollapsed(!collapsed)
    }
    return (
        <BrowserRouter>
            <div className="App">
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<DashboardFilled />}>
                                <Link to="/home" /> Home
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined />}>
                                <Link to="/profile" /> Profile
                            </Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: toggle,
                            })}
                        </Header>
                        <Content
                            className="site-layout-background content"
                        >
                            <Route path="/home" exact component={Home} />
                            <Route path="/Profile" exact component={Profile} />
                            <Redirect to="/home" />
                        </Content>
                    </Layout>
                </Layout>
                {/* <Route path="/" exact component={Home} />
                <Route path="/Profile" exact component={Profile} /> */}
            </div>
        </BrowserRouter>
    );
}

export default Router;
