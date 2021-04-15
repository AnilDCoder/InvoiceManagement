/* eslint-disable */
import React from 'react'
// import LanguageSwitcher from './LanguageSwitcher'
// import Actions from './Actions'
import { Button, Dropdown, Menu, Tooltip } from 'antd'
import UserMenu from './UserMenu'
import style from './style.module.scss'
import FavPages from './FavPages'
import SearchPages from "./Search";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { FormattedMessage } from 'react-intl'
import Notification from './Notification'
import { history } from 'index'

const mapStateToProps = ({ settings }) => ({
  logo: settings.logo,
})

const menu = (
  <Menu selectable={false}>
    <Menu.Item>
      <a href="#" onClick={e => e.preventDefault()}>
        <i className="fe fe-user mr-2" />
        {/* <FormattedMessage id="topBar.profileMenu.editProfile" /> */}
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <a>
        <i className="fe fe-log-out mr-2" />
        {/* <FormattedMessage id="topBar.profileMenu.logout" /> */}
      </a>
    </Menu.Item>
  </Menu>
)

const TopBar = ({ logo }) => {
  return (
    <div className={style.topbar}>
      <div className={style.logoContainer}>
        <div className={style.logo}>
          {/* <img src="favicon2.png" className="mr-2" alt="Shipping" /> */}
          {/* <span className={style.name}>{logo}</span> */}
          {/* {logo === 'Shipping' && <div className={style.descr}>Admin</div>} */}
        </div>
      </div>
      <div className="mr-4">
        <a onClick={() => history.push('/')}>
          <i className={`${style.icon} fe fe-home`} />
        </a>
      </div>
      <div className="mr-4">
        <FavPages />
      </div>
      <div className="mr-auto">
        {/* <a> */}
        {/* <i className={`${style.icon} fe fe-search`} /> */}
        <SearchPages />
        {/* </a> */}
      </div>
      <div className="mr-4 d-none d-md-block">{/* <IssuesHistory /> */}</div>
      <div className="mb-0 mr-auto d-xl-block d-none">{/* <ProjectManagement /> */}</div>
      {/* <div className="mr-4 d-none d-sm-block">
        <Tooltip placement="bottom" title="Bookmarks">
          <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
            <span className={style.item}>
              <i className={`${style.icon} fe fe-bell`} />
            </span>
          </Dropdown>
        </Tooltip>
      </div> */}
      <div className="mr-4 d-none d-sm-block">
        <Notification />
      </div>
      <div className="">
        <UserMenu />
      </div>
    </div>
  )
}
export default withRouter(connect(mapStateToProps)(TopBar))
