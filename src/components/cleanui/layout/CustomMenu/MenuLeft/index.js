import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import classNames from 'classnames'
import store from 'store'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { find } from 'lodash'
import {
  DoubleLeftOutlined,
  FilterOutlined,
  LineChartOutlined,
  SettingFilled,
  FileDoneOutlined,
  FormOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar'
import TuneIcon from '@material-ui/icons/Tune'
import style from './style.module.scss'

const mapStateToProps = ({ menu, settings, user }) => ({
  menuData: menu.menuData,
  isMenuCollapsed: settings.isMenuCollapsed,
  isMobileView: settings.isMobileView,
  isMenuUnfixed: settings.isMenuUnfixed,
  isMenuShadow: settings.isMenuShadow,
  leftMenuWidth: settings.leftMenuWidth,
  menuColor: settings.menuColor,
  logo: settings.logo,
  role: user.role,
})

const MenuLeft = ({
  dispatch,
  menuData = [],
  location: { pathname },

  isMenuCollapsed,
  isMobileView,
  isMenuUnfixed,
  isMenuShadow,
  leftMenuWidth,
  menuColor,
}) => {
  const [selectedKeys, setSelectedKeys] = useState(store.get('app.menu.selectedKeys') || [])
  const [openedKeys, setOpenedKeys] = useState(store.get('app.menu.openedKeys') || [])

  useEffect(() => {
    applySelectedKeys()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, menuData])

  const applySelectedKeys = () => {
    const flattenItems = (items, key) =>
      items.reduce((flattenedItems, item) => {
        flattenedItems.push(item)
        if (Array.isArray(item[key])) {
          return flattenedItems.concat(flattenItems(item[key], key))
        }
        return flattenedItems
      }, [])
    const selectedItem = find(flattenItems(menuData, 'children'), ['url', pathname])
    setSelectedKeys(selectedItem ? [selectedItem.key] : [])
  }

  const onCollapse = (value, type) => {
    if (type === 'responsive' && isMenuCollapsed) {
      return
    }
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMenuCollapsed',
        value: !isMenuCollapsed,
      },
    })
    setOpenedKeys([])
  }

  const onOpenChange = keys => {
    store.set('app.menu.openedKeys', keys)
    setOpenedKeys(keys)
  }

  const handleClick = e => {
    store.set('app.menu.selectedKeys', [e.key])
    setSelectedKeys([e.key])
  }

  // const generateMenuItems = () => {
  //   const generateItem = item => {
  //     const { key, title, url, icon, disabled, count } = item
  //     if (item.category) {
  //       return <Menu.ItemGroup key={Math.random()} title={item.title} />
  //     }
  //     if (item.url) {
  //       return (
  //         <Menu.Item key={key} disabled={disabled}>
  //           {item.target && (
  //             <a href={url} target={item.target} rel="noopener noreferrer">
  //               <span className={style.title}>{title}</span>
  //               {count && <span className="badge badge-success ml-2">{count}</span>}
  //               {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
  //             </a>
  //           )}
  //           {!item.target && (
  //             <Link to={url}>
  //               <span className={style.title}>{title}</span>
  //               {count && <span className="badge badge-success ml-2">{count}</span>}
  //               {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
  //             </Link>
  //           )}
  //         </Menu.Item>
  //       )
  //     }
  //     return (
  //       <Menu.Item key={key} disabled={disabled}>
  //         <span className={style.title}>{title}</span>
  //         {count && <span className="badge badge-success ml-2">{count}</span>}
  //         {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
  //       </Menu.Item>
  //     )
  //   }

  //   // const generateSubmenu = items =>
  //   //   items.map(menuItem => {
  //   //     if (menuItem.children) {
  //   //       const subMenuTitle = (
  //   //         <span key={menuItem.key}>
  //   //           <span className={style.title}>{menuItem.title}</span>
  //   //           {menuItem.count && <span className="badge badge-success ml-2">{menuItem.count}</span>}
  //   //           {menuItem.icon && <span className={`${menuItem.icon} ${style.icon}`} />}
  //   //         </span>
  //   //       )
  //   //       return (
  //   //         <Menu.SubMenu title={subMenuTitle} key={menuItem.key}>
  //   //           {/* {generateSubmenu(menuItem.children)} */}
  //   //         </Menu.SubMenu>
  //   //       )
  //   //     }
  //   //     return generateItem(menuItem)
  //   //   })

  //   return menuData.map(menuItem => {
  //     if (menuItem.roles && !menuItem.roles.includes(role)) {
  //       return null
  //     }
  //     if (menuItem.children) {
  //       const subMenuTitle = (
  //         <span key={menuItem.key}>
  //           <span className={style.title}>{menuItem.title}</span>
  //           {menuItem.count && <span className="badge badge-success ml-2">{menuItem.count}</span>}
  //           {menuItem.icon && <span className={`${menuItem.icon} ${style.icon}`} />}
  //         </span>
  //       )
  //       return (
  //         <Menu.SubMenu title={subMenuTitle} key={menuItem.key}>
  //           {/* {generateSubmenu(menuItem.children)} */}
  //         </Menu.SubMenu>
  //       )
  //     }
  //     return generateItem(menuItem)
  //   })
  // }

  const menuSettings = isMobileView
    ? {
      width: leftMenuWidth,
      collapsible: false,
      collapsed: true,
      onCollapse,
    }
    : {
      transition: 'width 0.4s ease-in-out',
      width: leftMenuWidth,
      collapsible: false,
      collapsed: true,
      onCollapse,
      breakpoint: 'lg',
    }

  const dynamicMenu = () => {
    if (pathname === '/chartering/fixtures') {
      return (
        <Menu
          onClick={handleClick}
          selectedKeys={selectedKeys}
          openKeys={openedKeys}
          onOpenChange={onOpenChange}
          mode="vertical"
          className={style.navigation}
          inlineIndent="15"
        >
          <Menu.Item
            key="1"
            icon={<DoubleLeftOutlined style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
          <Menu.Item
            key="2"
            icon={
              <SignalCellular4BarIcon
                style={{ width: '100%', transform: 'rotate(90deg)', height: '50%' }}
              />
            }
            className="right-menu-icons"
          />
          <Menu.Item
            key="3"
            icon={<FilterOutlined style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
        </Menu>
      )
    }
    if (pathname === '/chartering/estimates') {
      return (
        <Menu
          onClick={handleClick}
          selectedKeys={selectedKeys}
          openKeys={openedKeys}
          onOpenChange={onOpenChange}
          mode="vertical"
          className={style.navigation}
          inlineIndent="15"
        >
          <Menu.Item
            key="1"
            icon={<DoubleLeftOutlined style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
          <Menu.Item
            key="2"
            icon={<LineChartOutlined style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
          <Menu.Item
            key="3"
            icon={<SettingFilled style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
          <Menu.Item
            key="4"
            icon={<FileDoneOutlined style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
          <Menu.Item
            key="5"
            icon={<FormOutlined style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
          <Menu.Item
            key="6"
            icon={<SearchOutlined style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
          <Menu.Item
            key="7"
            icon={<TuneIcon style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
        </Menu>
      )
    }
    if (pathname === '/datacenter/address-list' || pathname === '/datacenter/vessellist') {
      return (
        <Menu
          onClick={handleClick}
          selectedKeys={selectedKeys}
          openKeys={openedKeys}
          onOpenChange={onOpenChange}
          mode="inline"
          className={style.navigation}
          inlineIndent="15"
        >
          <Menu.Item
            key="1"
            icon={<DoubleLeftOutlined style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
          <Menu.Item
            key="2"
            icon={<TuneIcon style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
          <Menu.Item
            key="3"
            icon={<SettingOutlined style={{ width: '100%' }} />}
            className="right-menu-icons"
          />
        </Menu>
      )
    }

    return null
  }

  console.log(pathname)

  return (
    <Layout.Sider
      {...menuSettings}
      className={classNames(`${style.menu}`, {
        [style.white]: menuColor === 'white',
        [style.gray]: menuColor === 'gray',
        [style.dark]: menuColor === 'dark',
        [style.unfixed]: isMenuUnfixed,
        [style.shadow]: isMenuShadow,
      })}
    >
      <div
        className={style.menuOuter}
        style={{
          transition: 'width 0.4s ease-in-out',
          width: isMenuCollapsed && !isMobileView ? 80 : leftMenuWidth,
          height: isMobileView || isMenuUnfixed ? 'calc(100% - 64px)' : 'calc(100% - 110px)',
        }}
      >
        {/* <div className={style.logoContainer}>
          <div className={style.logo}>
            <img src="favicon2.png" className="mr-2" alt="Shipping" />
            <span className={style.name}>{logo}</span>
            {logo === 'Shipping' && <div className={style.descr}>Admin</div>}
          </div>
        </div> */}
        <PerfectScrollbar>
          {dynamicMenu()}
        </PerfectScrollbar>
      </div>
    </Layout.Sider>
  )
}

export default withRouter(connect(mapStateToProps)(MenuLeft))
