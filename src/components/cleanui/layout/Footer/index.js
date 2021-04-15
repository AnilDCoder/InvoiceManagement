/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import useRaf from '@rooks/use-raf'

import fix from './logos/fix.svg'
import ops from './logos/ops.svg'
import mail from './logos/mail.svg'
import dollar from './logos/dollar.svg'
import risk from './logos/risk.svg'
import sys from './logos/sysConfig.svg'
import cargoList from './logos/cargo-list.svg'
import chartTeams from './logos/chart-teams.svg'
import contacts from './logos/contacts.svg'
import emailIntelligent from './logos/email-intelligent.svg'
import estimation from './logos/estimation.svg'
import fileTransfer from './logos/file-transfer.svg'
import fixtureList from './logos/fixture-list.svg'
import noonReports from './logos/noon-reports.svg'
import secureChatBox from './logos/secure-chat-box.svg'
import skypeIntegration from './logos/skype-integration.svg'
import teams from './logos/teams.svg'
import vesselCargoMatch from './logos/vessel-cargo-match.svg'
import vesselList from './logos/vessel-list.svg'
import vesselPosition from './logos/vessel-position.svg'
import voyageMonitor from './logos/voyage-monitor.svg'
import yahooIntegration from './logos/yahoo-integration.svg'
import accessRestriction from './logos/access-restrictions.svg'
import ap from './logos/ap.svg'
import ar from './logos/ar.svg'
import balanceSheet from './logos/balance-sheet.svg'
import banking from './logos/banking.svg'
import bunker from './logos/bunker.svg'
import bunkerContracts from './logos/BunkerContracts.svg'
import bunkerMgt from './logos/BunkerMgt.svg'
import businessAnalysis from './logos/business-analysis.svg'
import businessIntel from './logos/business-intel.svg'
import claims from './logos/Claims.svg'
import coaMgt from './logos/COAMgt.svg'
import ffaOptions from './logos/FFA-Options.svg'
import fleetMaps from './logos/fleet-map.svg'
import incomeStatement from './logos/income-statement.svg'
import m2mExposure from './logos/M2MExposure.svg'
import onboardNoonRep from './logos/onboard-noon-rep.svg'
import periodVessel from './logos/period-vessel.svg'
import periodMgt from './logos/PeriodMgt.svg'
import pniFdd from './logos/PNI-FDD.svg'
import soa from './logos/soa.svg'
import sysConfig from './logos/sys-configure.svg'
import trialBalance from './logos/trial-balance.svg'
import dashboard from './logos/dashboard.svg'
import add from './logos/add-plus.svg'
import PerfectScrollbar from 'react-perfect-scrollbar'
// import cargo from "resources/images/svg/cargo.svg";

import './style.css'
import { Badge, Button, Dropdown, Menu, Tooltip } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const { SubMenu } = Menu

const images = [mail, fix, ops, dollar, risk, sys]
const mapStateToProps = ({ dispatch }) => ({
  dispatch
})
const Footer = ({ dispatch }) => {
  const [activeTarget, setactiveTarget] = useState();
  const [activeBadge, setactiveBadge] = useState(false);
  const [docMenu, setdocMenu] = useState(
    [
      {
        image: dashboard,
        title: 'Dashboard',
        active: true,
        children: [],
        url: '/'

      },
      {
        image: mail,
        title: 'Communication',
        active: false,
        children: [{
          image: emailIntelligent,
          title: 'Email-Intelligent',
          url: '/datacenter/port'
        },
        {
          image: secureChatBox,
          title: 'Secure Chat Box',
          url: '/datacenter/port'
        },
        {
          image: skypeIntegration,
          title: 'Skype Integration',
          url: '/datacenter/port'
        },
        {
          image: yahooIntegration,
          title: 'Yahoo Integration',
          url: '/datacenter/port'
        },
        {
          image: teams,
          title: 'Teams',
          url: '/datacenter/port'
        },
        {
          image: contacts,
          title: 'Contacts',
          url: '/datacenter/port'
        }],
      },
      //this one
      {
        image: ops,
        title: 'Chartering',
        active: false,
        children: [{
          image: cargoList,
          title: 'Cargo List',
          url: '/datacenter/port'
        },
        {
          image: vesselList,
          title: 'Vessel List',
          url: '/datacenter/port'
        },
        {
          image: estimation,
          title: 'Estimation',
          url: '/datacenter/port'
        },
        {
          image: vesselCargoMatch,
          title: 'Vessel_Cargo Match',
          url: '/datacenter/port'
        },
        {
          image: fileTransfer,
          title: 'File Transfer',
          url: '/datacenter/port'
        },
        {
          image: fixtureList,
          title: 'Fixture List',
          url: '/datacenter/port'
        },
        {
          image: chartTeams,
          title: 'Chart Teams',
          url: '/datacenter/port'
        },
        {
          image: chartTeams,
          title: 'Cargo Schedule',
          url: '/chartering/cargoschedule'
        },
        {
          image: chartTeams,
          title: 'Matching',
          url: '/chartering/matching'
        },
        {
          image: chartTeams,
          title: 'TC In-List',
          url: '/chartering/tcinlist'
        },
        {
          image: chartTeams,
          title: 'TC Out-List',
          url: '/chartering/tcoutlist'
        },
        {
          image: chartTeams,
          title: 'Open Position',
          url: '/chartering/openposition'
        },
        {
          image: chartTeams,
          title: 'Cargo Book',
          url: '/chartering/cargobook'
        },
        ],
      },
      //this one
      {
        image: fix,
        title: 'Operations',
        active: false,
        children: [{
          image: voyageMonitor,
          title: 'Voyage Monitor',
          url: '/datacenter/port'
        },
        {
          image: noonReports,
          title: 'Noon Reports',
          url: '/datacenter/port'
        },
        {
          image: vesselPosition,
          title: 'Vessel Position',
          url: '/datacenter/port'
        },
        {
          image: fleetMaps,
          title: 'Fleet Map',
          url: '/datacenter/port'
        },
        {
          image: onboardNoonRep,
          title: 'Onboard Noon rep',
          url: '/datacenter/port'
        },
        {
          image: mail,
          title: 'LayTime',
          url: '/datacenter/port'
        },
        {
          image: mail,
          title: 'Voyage Analysis',
          url: '/datacenter/port'
        },
        {
          image: mail,
          title: 'Ops Teams',
          url: '/datacenter/port'
        },
        {
          image: claims,
          title: 'Claims',
          url: '/datacenter/port'
        },
        {
          image: mail,
          title: 'Vessel Schedule',
          url: '/operations/vesselschedule'
        },
        {
          image: mail,
          title: 'Port Schedule',
          url: '/operations/portschedule'
        },
        {
          image: mail,
          title: ' Fleet Map',
          url: '/operations/fleetmap'
        },
        {
          image: mail,
          title: ' Voyage List',
          url: '/operations/voyagelist'
        },
        {
          image: mail,
          title: ' Task List',
          url: '/operations/tasklist'
        },
        {
          image: mail,
          title: ' Alert List',
          url: '/operations/alertlist'
        },
        {
          image: mail,
          title: ' Onboard',
          url: '/operations/onboard'
        },
        {
          image: mail,
          title: ' Port Calls',
          url: '/operations/portcalls'
        },
        {
          image: mail,
          title: ' Forms',
          url: '/operations/forms'
        },
        {
          image: mail,
          title: ' Bunker-List',
          url: '/operations/bunkerlist'
        },
        ],
      },

      //this one
      {
        image: dollar,
        title: 'Financials',
        active: false,
        children: [{
          image: ar,
          title: 'AR',
          url: '/financials/receivables'
        },
        {
          image: ap,
          title: 'AP',
          url: '/financials/payables'
        },
        {
          image: banking,
          title: 'Banking',
          url: '/datacenter/port'
        },
        {
          image: soa,
          title: 'SOA',
          url: '/datacenter/port'
        },
        {
          image: trialBalance,
          title: 'Trial Balance',
          url: '/financials/trialbalance'
        },
        {
          image: periodVessel,
          title: 'Period Vessel',
          url: '/datacenter/port'
        },
        {
          image: incomeStatement,
          title: 'Income Statement',
          url: '/datacenter/port'
        },
        {
          image: balanceSheet,
          title: 'Balance Sheet',
          url: '/datacenter/port'
        },
        {
          image: businessIntel,
          title: 'Business Intel',
          url: '/datacenter/port'
        },
        {
          image: businessAnalysis,
          title: 'Business Analysis',
          url: '/datacenter/port'
        },

        {
          image: businessIntel,
          title: 'Transaction ',
          url: '/financials/transactions'
        },

        {
          image: businessIntel,
          title: 'Vendor Statement ',
          url: '/financials/vendorstatement'
        },

        ],
      },
      {
        image: risk,
        title: 'Analytics',
        active: false,
        children: [{
          image: coaMgt,
          title: 'COA Mgt',
          url: '/datacenter/port'
        },
        {
          image: periodMgt,
          title: 'Period Mgt',
          url: '/datacenter/port'
        },
        {
          image: m2mExposure,
          title: 'M2M Exposure',
          url: '/datacenter/port'
        },
        {
          image: ffaOptions,
          title: 'FFA / Options',
          url: '/datacenter/port'
        },
        {
          image: bunkerContracts,
          title: 'Bunker Contracts',
          url: '/datacenter/port'
        },
        ],
      },
      //this one
      {
        image: sys,
        title: 'System Configuration',
        active: false,

        children: [
          {
            image: sysConfig,
            title: 'Sys Configure',
            // url: '/datacenter/port'

            children: [{
              image: sysConfig,
              title: 'Organisation',
              url: '/organisation/organisation'
            },
            {
              image: sysConfig,
              title: 'Country',
              url: '/organisation/country'
            },
            {
              image: sysConfig,
              title: 'State',
              url: '/organisation/state'
            },
            ]

          },
          {
            image: accessRestriction,
            title: 'Security',
            children: [
              {
                image: mail,
                title: 'Group',
                url: '/datacenter/group'
              },
              {
                image: mail,
                title: 'User',
                url: '/datacenter/user'
              },
            ]
          },
          {
            image: accessRestriction,
            title: 'Terms',
            // url: '/datacenter/port'
            children: [
              {
                title: 'Charter Party Terms',
                // url:''
                children: [
                  {
                    title: 'Charter Party Forms',
                    url: '/master/charter-party-form'
                  }, {
                    title: 'Extra Freight Terms',
                    url: '/master/extra-freight'
                  }, {
                    title: 'Laytime to Commence',
                    url: '/master/laytime-commence'
                  }, {
                    title: 'Laytime Terms',
                    url: '/master/laytime-terms'
                  }, {
                    title: 'Laytime Types',
                    url: '/master/laytime-types'
                  }, {
                    title: 'Loading Costs',
                    url: '/master/loading-costs'
                  }, {
                    title: 'NOR to Tender',
                    url: '/master/nor-to-tender'
                  }, {
                    title: 'Other Loading Terms',
                    url: '/master/other-loading-terms'
                  }, {
                    title: 'Payment Terms',
                    url: '/master/payment-terms'
                  }, {
                    title: 'Shifting Terms',
                    url: '/master/shifting-terms'
                  }, {
                    title: 'Standard Paragraphs',
                    url: '/master/standard-paragraphs'
                  }, {
                    title: 'Time to Tender',
                    url: '/master/time-to-tender'
                  },
                  // {
                  //   title: 'Vessel',
                  //   url: '/master/vessel'
                  // },


                  // {
                  //   title: 'Agreed Transit Times and Rates Rule',
                  //   url: '/master/agreed-transit-times-and-rates-rule'
                  // },

                  // {
                  //   title: 'Correlation Profiles Rate Detail',
                  //   url: '/master/correlation-profile-details'
                  // },

                  // {
                  //   title: 'Voyage Template Contact Details',
                  //   url: '/master/voyage-template-contact-details'
                  // },

                  // {
                  //   title: 'Veslink Voyage Instructions',
                  //   url: '/master/veslink-voyage-instruction'
                  // },
                  // {
                  //   title: 'Port List',
                  //   url: '/master/portlist'
                  // }

                  {
                    title: 'Time Used',
                    url: '/master/time-used'
                  }, {
                    title: 'Working Days',
                    url: '/master/working-days'
                  },
                ]
              },
              {
                title: 'Delays and Weather',
                children: [
                  {
                    title: 'Delay Reason',
                    url: '/master/delay-reason'
                  }, {
                    title: 'Delay Types',
                    url: '/master/delay-types'
                  }
                ]
              },
              {
                title: 'Currencies',
                children: [
                  {
                    image: businessIntel,
                    title: 'Currency Types ',
                    url: '/master/currency-types'
                  },

                  {
                    image: businessIntel,
                    title: 'Exchange Rate ',
                    url: '/master/exchange-rate'
                  },
                  {
                    title: 'Loadline Zone Seasons',
                    url: '/master/loadline-zone-seasons'
                  },]
              },
              {
                title: 'Port And Areas',
                children: [

                  {
                    title: 'Port Activity',
                    url: '/master/port-activity'
                  },
                  {
                    title: 'Port Function',
                    url: '/master/port-function'
                  },
                  {
                    title: 'Port Action Type',
                    url: '/master/port-action-type'
                  },
                  {
                    title: 'Port Function To Activities',
                    url: '/master/port-function-to-activities'
                  },
                  {
                    title: 'Port Type',
                    url: '/master/port-type'
                  },

                ]
              },
              {
                title: 'Vessels',
                children: [

                  {
                    title: 'Fuel/lube Type',
                    url: '/master/fuel-lube-type'
                  },
                  {
                    title: 'ECA Fuel Zones',
                    url: '/master/eca-fuel-zone'
                  },
                  {
                    title: 'Fuel Zone Sets',
                    url: '/master/fuel-zone-sets'
                  },
                  // {
                  //   title: 'Fuel Zone Set Details',
                  //   url: '/master/fuel-zone-set-details'
                  // },
                  {
                    title: 'Fuel Consumption Category',
                    url: '/master/fuel-consumption-category'
                  },

                  {
                    title: 'Vessel Fleet',
                    url: '/master/vessel-fleet'
                  },
                  {
                    title: 'Vessel Type',
                    url: '/master/vessel-type'
                  },
                  {
                    title: 'Unit Of Measure',
                    url: '/master/unit-of-measure'
                  },
                ]
              },
              {
                title: 'Other',
                children: [
                  {
                    title: 'Coorelation Profile',
                    url: '/master/coorelation-profile'
                  },
                  {
                    title: 'Port Distance ',
                    url: '/master/port-distance'
                  },
                  {
                    title: 'File Management ',
                    url: '/master/file-management'
                  },
                  {
                    title: 'Holiday Calendar',
                    url: '/master/holiday-master'
                  },
                  {
                    title: 'Note Categories',
                    url: '/master/note-categories'
                  },
                  {
                    title: 'Operation Ledger',
                    url: '/master/operation-heads'
                  },
                  {
                    title: 'PL Snapshot Type',
                    url: '/master/pl-snapshot-type'
                  },
                  {
                    title: 'Task Alert Group Category',
                    url: '/master/task-alert-group-category'
                  },
                  {
                    title: 'Task Alert Rule Set',
                    url: '/master/task-alert-rule-set'
                  },
                  {
                    title: 'Task Category',
                    url: '/master/task-category'
                  },
                  {
                    title: 'Task Group',
                    url: '/master/task-group'
                  },

                  {
                    title: 'User Defined Fields',
                    url: '/master/user-defined-fields'
                  },
                  {
                    title: 'User Defined Field Values',
                    url: '/master/udf-field-values'
                  },
                  {
                    title: 'Tax Rate Master',
                    url: '/master/tax-rate-master'
                  },

                  {
                    title: 'Voyage Contact Role',
                    url: '/master/voyage-contact-roles'
                  },
                  {
                    title: 'Voyage Template Master',
                    url: '/master/voyage-template-master'
                  },
                  {
                    title: 'Voyage Template Rules',
                    url: '/master/voyage-template-veslink'
                  },
                ]
              }

            ]
          },

          {
            image: accessRestriction,
            title: 'Address Book',
            url: '/datacenter/address-list'
          },
          {
            image: mail,
            title: 'Port',
            url: '/datacenter/port'
          },
          {
            image: mail,
            title: 'Cargo',
            url: '/datacenter/cargo'
            // children: [{
            //   image: mail,
            //   title: 'Cargo',
            //   url: '/datacenter/cargo'
            // },
            // // {
            // //   image: mail,
            // //   title: 'Cargo Groups',
            // //   url: '/datacenter/cargo-groups'
            // // }
            // ]
          },

          {
            image: mail,
            title: 'Vessel',
            url: '/datacenter/vessels'
          },
          // {
          //   image: mail,
          //   title: 'Voyage',
          //   url: '/datacenter/port'
          // },



          {
            image: accessRestriction,
            title: 'Distances',
            url: '/datacenter/distances'
          },
          // {
          //   image: accessRestriction,
          //   title: 'Vessel - List',
          //   url: '/datacenter/vessellist'
          // },
          // {
          //   image: accessRestriction,
          //   title: 'Matching',
          //   url: '/datacenter/matching'
          // },
          // {
          //   image: accessRestriction,
          //   title: 'Interface Messages',
          //   url: '/datacenter/interfacemessages'
          // },
        ],
      },
    ]);
  const history = useHistory()
  const goToLink = (url) => {
    history.push(url)
  }

  useEffect(() => {
    dispatch({
      type: 'menu/SET_DATA',
      payload: docMenu,
    })
  }, []);

  const generateMenuItems = (i, menuData) => {
    const generateItem = item => {
      const { key, title, url, icon, disabled, count } = item
      if (item.url) {
        return (
          //for single items which is not having submenus
          <>
            <Menu.Item key={key} disabled={disabled} >
              {/* {item.target && (
                <a href={url} target={item.target} rel="noopener noreferrer" >
                  <span className="dock-submenu-label ml-2 px-2">{title}</span>
                  {count && <span className="badge badge-success ml-2">{count}</span>}
                  {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}


                </a>
              )} */}
              {!item.target && (
                <Link to={url} onClick={() => activateDoc(i)}>
                  <span className="dock-submenu-label ml-2 pr-4">{title}</span>
                  {count && <span className="badge badge-success ml-2">{count}</span>}
                  {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
                </Link>
              )}
            </Menu.Item>
            <hr className="divider" />
          </>


        )
      }
    }

    const generateSubmenu = items =>
      items.map(menuItem => {
        if (menuItem.children) {
          const subMenuTitle = (
            <span key={menuItem.key}>
              <span className="dock-submenu-label ml-2 pr-4">{menuItem.title}</span>
              {menuItem.count && <span className="badge badge-success ml-2">{menuItem.count}</span>}
              {menuItem.icon && <span className={`${menuItem.icon} `} />}
            </span>
          )
          return (
            <>
              <Menu.SubMenu title={subMenuTitle} key={menuItem.key} >
                {generateSubmenu(menuItem.children)}
              </Menu.SubMenu>
              <hr className="divider" />

            </>
          )
        }
        return (
          generateItem(menuItem))
      })

    return menuData.map(menuItem => {
      if (menuItem.children) {
        const subMenuTitle = (
          <span key={menuItem.key}>
            <span className="dock-submenu-label ml-2 pr-4">{menuItem.title}</span>
            {menuItem.count && <span className="badge badge-success ml-2">{menuItem.count}</span>}
            {menuItem.icon && <span className={`${menuItem.icon}`} />}
          </span>

        )
        return (
          //for submenu like terms
          <>
            <Menu.SubMenu title={subMenuTitle} key={menuItem.key} >
              {generateSubmenu(menuItem.children)}

            </Menu.SubMenu>
            <hr className="divider" />
          </>

        )
      }
      return generateItem(menuItem)
    })
  }

  const activateDoc = (i) => {
    // let data = docMenu.forEach((r) => i.title == r.title ? r.active = true : r.active = false)
    let newArr = docMenu.map((e) => {
      e.title == i.title ? e.active = true : e.active = false
      return e
    })
    setdocMenu(newArr)
    dispatch({
      type: 'menu/SET_DATA',
      payload: newArr,
    })

  }

  // const [docMenuData, setdocMenuData] = useState(dockData);
  const createMenu = (i, items) => {
    return (
      // <div style={{ height: '350px' }}>
      // <PerfectScrollbar style={{ height: '350px' }}>
      <Menu className="dock-menu-background" key={1} >
        {generateMenuItems(i, items)}
      </Menu>

      // </PerfectScrollbar>
      // </div>


    )
  }

  const activateDocMenu = (e, item) => {
    console.log(e, item)
    setactiveTarget(e)

    // let newArr = docMenu.map((e) => {
    //   e.title == i.title ? e.active = true : e.active = false
    //   return e
    // })
    let newArr = docMenu.map((e) => {
      e.title == item.title ? e.active = true : e.active = false
      return e
    })
    setdocMenu(newArr)
    dispatch({
      type: 'menu/SET_DATA',
      payload: item.children,
    })

    // e.preventDefault();
    // item.active = true;
    // if (!e.currentTarget.classList.contains('ant-dropdown-open')) {
    //   setactiveBadge(true)
    //   item.active = true
    //   docMenuData.map((singleItem) => {
    //     if (item.name != singleItem.name) {
    //       singleItem.active = false
    //     } else {
    //       singleItem.active = true
    //     }
    //   });
    // } else {
    //   item.active = true
    //   setactiveBadge(false)
    // }

  }

  const baseWidth = 40
  const distanceLimit = baseWidth * 6
  const beyondTheDistanceLimit = distanceLimit + 1
  const distanceInput = [
    -distanceLimit,
    // distanceLimit,
    // -distanceLimit / 1.25,
    // -distanceLimit / 1.3,
    // 0,
    // distanceLimit / 1.3,
    // distanceLimit / 1.25,
    distanceLimit,
  ]
  const widthOutput = [
    baseWidth,
    // baseWidth * 1.2,
    // baseWidth * 1.2,
    // baseWidth * 1.3,
    // baseWidth * 1.2,
    // baseWidth * 1.1,
    baseWidth,
  ]

  const Img = ({ src, mouseX }) => {
    const distance = useMotionValue(beyondTheDistanceLimit)
    const width = useSpring(useTransform(distance, distanceInput, widthOutput), {
      damping: 100,
      stiffness: 1000,
    })

    const ref = useRef()

    useRaf(() => {
      const el = ref.current
      const mouseXVal = mouseX.get()
      if (el && mouseXVal !== null) {
        const rect = el.getBoundingClientRect()

        // get the x coordinate of the img DOMElement's center
        // the left x coordinate plus the half of the width
        const imgCenterX = rect.left + rect.width / 2

        // difference between the x coordinate value of the mouse pointer
        // and the img center x coordinate value
        const distanceDelta = mouseXVal - imgCenterX
        distance.set(distanceDelta)
        return
      }

      distance.set(beyondTheDistanceLimit)
    }, true)

    return <motion.img ref={ref} src={src} className="icon" style={{ width }} />
  }

  const mouseX = useMotionValue(null)

  return (
    <div className="dock-container">
      <>
        <div className="dock">
          <div
            className="icons"
            onMouseMove={event => mouseX.set(event.nativeEvent.x)}
            onMouseLeave={() => mouseX.set(null)}>
            {docMenu.map((item, index) => (
              // <Dropdown overlay={createMenu(item, item.children)} trigger={['click']} placement="topCenter" arrow key={item.title} className="dock-menu">
              <Tooltip placement="top" title={item.title}>
                <div className="ant-dropdown-link dock-menu-background-link" onClick={(e) => activateDocMenu(e, item)}>
                  <Img src={item.image} key={index} mouseX={mouseX} />
                  {
                    item.active ? (
                      <Badge status="processing" />
                    ) : (null)
                  }
                </div>
              </Tooltip>
              // </Dropdown>
            ))}
            <div className="vert-divider"></div>
            <div className="dock-menu">
              <Tooltip placement="top" title="Add">
                {/* <a className="ant-dropdown-link dock-menu-background-link" onClick={(e) => activateDocMenu(e, item)}> */}
                <div className="ant-dropdown-link dock-menu-background-link">
                  <Img src={add} key="add" mouseX={mouseX} />
                  {
                    false ? (
                      <Badge status="processing" />
                    ) : (null)
                  }
                </div>
                {/* </a> */}
              </Tooltip>


            </div>
          </div>
        </div>
      </>
    </div>
  )
}
export default connect(mapStateToProps)(Footer)



