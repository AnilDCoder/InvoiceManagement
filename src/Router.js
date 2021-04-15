import React, { lazy, Suspense, useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DashboardFilled,
    ProfileFilled,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FileTextOutlined,
    MenuOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './router.scss'
import './layout.scss'
import TopBar from 'layout/TopBar';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Notification from 'components/cleanui/layout/TopBar/Notification';
import UserMenu from 'components/cleanui/layout/TopBar/UserMenu';


const { Header, Sider, Content } = Layout;
const routerAnimation = 'zoom-fadein'

const Router = ({ history }) => {
    const [collapsed, setcollapsed] = useState(false)
    const toggle = () => {
        setcollapsed(!collapsed)
    }

    const routes = [
        {
            path: '/dashboard',
            Component: lazy(() => import('./pages/Dashboard')),
            exact: true,
        },
        {
            path: '/invoices',
            Component: lazy(() => import('./pages/Invoices')),
            exact: true,
        },
        {
            path: '/home',
            Component: lazy(() => import('./pages/Home')),
            exact: true,
        },
        {
            path: '/profile',
            Component: lazy(() => import('./pages/Profile')),
            exact: true,
        },
    ]

    return (
        <BrowserRouter>
            <div className="App">
                <Layout className="main-container">
                    <Sider trigger={null} collapsible collapsed={collapsed} className="light-bg">
                        <Header className="side-header light-bg app-header" style={{ padding: 0 }}>
                            <Button type="link" icon={<MenuOutlined />} onClick={toggle} shape="round" />
                        </Header>
                        <div className="sidebar">
                            <Menu mode="inline" defaultSelectedKeys={['1']} className="sidebar-menu">
                                <Menu.Item key="1" icon={<DashboardFilled />}>
                                    <Link to="/dashboard" /> Dashboard
                            </Menu.Item>
                                <Menu.Item key="2" icon={<FileTextOutlined />}>
                                    <Link to="/invoices" /> Invoices
                            </Menu.Item>

                                {/* </Menu> */}
                                <div className="mt-auto w-100 empty-menu">
                                </div>
                                {/* <Menu mode="inline" > */}
                                <Menu.Item key="3" icon={<SettingOutlined />}>
                                    <Link to="/settings" /> Settings
                            </Menu.Item>
                                <Menu.Item key="4" icon={<UserOutlined />}>
                                    <Link to="/profile" /> Profile
                            </Menu.Item>
                                <Menu.Item key="5" icon={<LogoutOutlined />}>
                                    <Link to="/logout" /> Logout
                            </Menu.Item>

                            </Menu>
                            {/* </div> */}
                        </div>
                    </Sider>
                    <Layout className="site-layout">
                        <Layout.Header
                            className={'app-header drag'}
                        // className={classNames('cui__layout__header', {
                        //   cui__layout__fixedHeader: isTopbarFixed,
                        //   cui__layout__headerGray: isGrayTopbar,
                        // })}
                        >
                            <TopBar />
                        </Layout.Header>
                        <Route
                            render={state => {
                                const { location } = state
                                return (
                                    <SwitchTransition>
                                        <CSSTransition
                                            key={location.pathname}
                                            appear
                                            classNames={routerAnimation}
                                            timeout={200}
                                        >
                                            <Switch location={location}>
                                                <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
                                                {routes.map(({ path, Component, exact }) => (
                                                    <Route
                                                        path={path}
                                                        key={path}
                                                        exact={exact}
                                                        render={() => {
                                                            return (
                                                                <PerfectScrollbar>

                                                                    <div className={`routerAnimation  content`} >
                                                                        <Suspense fallback={null}>
                                                                            <Component />
                                                                        </Suspense>
                                                                    </div>
                                                                </PerfectScrollbar>

                                                            )
                                                        }}
                                                    />
                                                ))}
                                                <Redirect to="/" />
                                            </Switch>
                                        </CSSTransition>
                                    </SwitchTransition>
                                )
                            }}
                        />
                    </Layout>
                </Layout>
                {/* <Route path="/" exact component={Home} />
                <Route path="/Profile" exact component={Profile} /> */}
            </div>
        </BrowserRouter>
    );
}

export default Router;
