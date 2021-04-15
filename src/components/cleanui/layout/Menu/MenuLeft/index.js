/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import classNames from 'classnames'
import store from 'store'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { find } from 'lodash'
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
  logo,
  role,
}) => {
  const [selectedKeys, setSelectedKeys] = useState(store.get('app.menu.selectedKeys') || [])
  const [openedKeys, setOpenedKeys] = useState(store.get('app.menu.openedKeys') || [])

  useEffect(() => {
    applySelectedKeys()
    console.log(menuColor)
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

  const generateMenuItems = () => {
    const generateItem = item => {
      const { key, title, url, icon, disabled, count } = item
      if (item.category) {
        return <Menu.ItemGroup key={Math.random()} title={item.title} />
      }
      if (item.url) {
        return (
          <Menu.Item key={key} disabled={disabled}>
            {item.target && (
              <a href={url} target={item.target} rel="noopener noreferrer">
                <img className={style.menu_icon} src={item.image}></img>
                {count && <span className="badge badge-success ml-2">{count}</span>}
                {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
                <span className={style.title}>{title}</span>
              </a>
            )}
            {!item.target && (
              <Link to={url}>
                <img className={style.menu_icon} src={item.image}></img>
                {count && <span className="badge badge-success ml-2">{count}</span>}
                {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
                <span className={style.title}>{title}</span>

              </Link>
            )}
          </Menu.Item>
        )
      }
      return (
        <Menu.Item key={key} disabled={disabled}>
          <img className={style.menu_icon} src={item.image}></img>
          {count && <span className="badge badge-success ml-2">{count}</span>}
          {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
          <span className={style.title}>{title}</span>

        </Menu.Item>
      )
    }

    const generateSubmenu = items =>
      items.map(menuItem => {
        if (menuItem.children) {
          const subMenuTitle = (
            <span key={menuItem.key}>
              <img className={style.menu_icon} src={menuItem.image}></img>
              {menuItem.count && <span className="badge badge-success ml-2">{menuItem.count}</span>}
              {menuItem.icon && <span className={`${menuItem.icon} ${style.icon}`} />}
              <span className={style.title}>{menuItem.title}</span>

            </span>
          )
          return (
            <Menu.SubMenu title={subMenuTitle} key={menuItem.key}>
              {generateSubmenu(menuItem.children)}
            </Menu.SubMenu>
          )
        }
        return generateItem(menuItem)
      })

    return menuData.map(menuItem => {
      if (menuItem.roles && !menuItem.roles.includes(role)) {
        return null
      }
      if (menuItem.children) {
        const subMenuTitle = (
          <span key={menuItem.key}>
            <img className={style.menu_icon} src={menuItem.image}></img>
            {menuItem.count && <span className="badge badge-success ml-2">{menuItem.count}</span>}
            {menuItem.icon && <span className={`${menuItem.icon} ${style.icon}`} />}
            <span className={style.title}>{menuItem.title}</span>

          </span>
        )
        return (
          <Menu.SubMenu title={subMenuTitle} key={menuItem.key}>
            {generateSubmenu(menuItem.children)}
          </Menu.SubMenu>
        )
      }
      return generateItem(menuItem)
    })
  }

  const menuSettings = isMobileView
    ? {
      width: leftMenuWidth,
      collapsible: false,
      collapsed: false,
      onCollapse,
    }
    : {
      transition: 'all 0.4s ease-in-out',
      width: leftMenuWidth,
      collapsible: true,
      collapsed: isMenuCollapsed,
      onCollapse,
      breakpoint: 'lg',
    }

  return (
    <Layout.Sider
      {...menuSettings}
      className={classNames(`${style.menu}`, {
        // [style.white]: menuColor === 'white',
        // [style.gray]: menuColor === 'gray',
        // [style.dark]: menuColor === 'dark',
        [style.dark]: menuColor,
        [style.unfixed]: isMenuUnfixed,
        [style.shadow]: isMenuShadow,
      })}
    >
      <div
        className={style.menuOuter}
        style={{
          transition: 'all 0.4s ease-in-out',
          width: isMenuCollapsed && !isMobileView ? 80 : leftMenuWidth,
          height: isMobileView || isMenuUnfixed ? 'calc(100% - 64px)' : '50%',
        }}
      >
        <div className={style.logoContainer}>
          <div className={style.logo}>

            {/* <img className={style.menu_icon} src="favicon2.png" className="mr-2" alt="Shipping" />
            <span className={style.name}>{logo}</span>
            {logo === 'Shipping' && <div className={style.descr}>Admin</div>} */}
          </div>
        </div>
        <PerfectScrollbar style={{ height: 'calc(100vh - 200px)' }}>
          <Menu
            // theme="dark"
            onClick={handleClick}
            selectedKeys={selectedKeys}
            openKeys={openedKeys}
            onOpenChange={onOpenChange}
            mode="vertical"
            className={`${style.navigation} dock-menu`}
            inlineIndent="15"
          >
            {generateMenuItems()}
          </Menu>
          {/* <div className={style.banner}>
            <p>More components, more style, more themes, and premium support!</p>
            <a
              href="https://themeforest.net/item/clean-ui-react-admin-template/21938700"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-success btn-rounded px-3"
            >
              Buy Bundle
            </a>
          </div> */}
        </PerfectScrollbar>
      </div>
    </Layout.Sider>
  )
}

export default withRouter(connect(mapStateToProps)(MenuLeft))
