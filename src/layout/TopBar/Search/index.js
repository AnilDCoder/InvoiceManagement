/*eslint-disable */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { injectIntl } from 'react-intl'
import { Dropdown, Input, Tooltip, message } from 'antd'
import PerfectScrollbar from 'react-perfect-scrollbar'
import store from 'store'
import style from './style.module.scss'

const mapStateToProps = ({ menu }) => ({
  menuData: menu.menuData,
})

const Search = ({ menuData = [] }) => {
  const [searchText, setSearchText] = useState('')
  const [favs, setFavs] = useState(store.get('app.topbar.favs') || [])
  const [pagesList, setPagesList] = useState([])
  const [docData, setdocData] = useState(
    [
      {
        title: 'Dashboard',
        active: true,
        children: [],
        url: '/'

      },
      {
        title: 'Communication',
        active: false,
        children: [{
          title: 'Email-Intelligent',
          url: '/datacenter/port'
        },
        {
          title: 'Secure Chat Box',
          url: '/datacenter/port'
        },
        {
          title: 'Skype Integration',
          url: '/datacenter/port'
        },
        {
          title: 'Yahoo Integration',
          url: '/datacenter/port'
        },
        {
          title: 'Teams',
          url: '/datacenter/port'
        },
        {
          title: 'Contacts',
          url: '/datacenter/port'
        }],
      },
      //this one
      {
        title: 'Chartering',
        active: false,
        children: [{
          title: 'Cargo List',
          url: '/datacenter/port'
        },
        {
          title: 'Vessel List',
          url: '/datacenter/port'
        },
        {
          title: 'Estimation',
          url: '/datacenter/port'
        },
        {
          title: 'Vessel_Cargo Match',
          url: '/datacenter/port'
        },
        {
          title: 'File Transfer',
          url: '/datacenter/port'
        },
        {
          title: 'Fixture List',
          url: '/datacenter/port'
        },
        {
          title: 'Chart Teams',
          url: '/datacenter/port'
        },
        {
          title: 'Cargo Schedule',
          url: '/chartering/cargoschedule'
        },
        {
          title: 'Matching',
          url: '/chartering/matching'
        },
        {
          title: 'TC In-List',
          url: '/chartering/tcinlist'
        },
        {
          title: 'TC Out-List',
          url: '/chartering/tcoutlist'
        },
        {
          title: 'Open Position',
          url: '/chartering/openposition'
        },
        {
          title: 'Cargo Book',
          url: '/chartering/cargobook'
        },
        ],
      },
      //this one
      {
        title: 'Operations',
        active: false,
        children: [{
          title: 'Voyage Monitor',
          url: '/datacenter/port'
        },
        {
          title: 'Noon Reports',
          url: '/datacenter/port'
        },
        {
          title: 'Vessel Position',
          url: '/datacenter/port'
        },
        {
          title: 'Fleet Map',
          url: '/datacenter/port'
        },
        {
          title: 'Onboard Noon rep',
          url: '/datacenter/port'
        },
        {
          title: 'LayTime',
          url: '/datacenter/port'
        },
        {

          title: 'Voyage Analysis',
          url: '/datacenter/port'
        },
        {

          title: 'Ops Teams',
          url: '/datacenter/port'
        },
        {
          title: 'Claims',
          url: '/datacenter/port'
        },
        {

          title: 'Vessel Schedule',
          url: '/operations/vesselschedule'
        },
        {

          title: 'Port Schedule',
          url: '/operations/portschedule'
        },
        {

          title: ' Fleet Map',
          url: '/operations/fleetmap'
        },
        {

          title: ' Voyage List',
          url: '/operations/voyagelist'
        },
        {

          title: ' Task List',
          url: '/operations/tasklist'
        },
        {

          title: ' Alert List',
          url: '/operations/alertlist'
        },
        {

          title: ' Onboard',
          url: '/operations/onboard'
        },
        {

          title: ' Port Calls',
          url: '/operations/portcalls'
        },
        {

          title: ' Forms',
          url: '/operations/forms'
        },
        {

          title: ' Bunker-List',
          url: '/operations/bunkerlist'
        },
        ],
      },

      //this one
      {
        title: 'Financials',
        active: false,
        children: [{
          title: 'AR',
          url: '/financials/receivables'
        },
        {
          title: 'AP',
          url: '/financials/payables'
        },
        {
          title: 'Banking',
          url: '/datacenter/port'
        },
        {
          title: 'SOA',
          url: '/datacenter/port'
        },
        {
          title: 'Trial Balance',
          url: '/financials/trialbalance'
        },
        {
          title: 'Period Vessel',
          url: '/datacenter/port'
        },
        {
          title: 'Income Statement',
          url: '/datacenter/port'
        },
        {
          title: 'Balance Sheet',
          url: '/datacenter/port'
        },
        {
          title: 'Business Intel',
          url: '/datacenter/port'
        },
        {
          title: 'Business Analysis',
          url: '/datacenter/port'
        },

        {
          title: 'Transaction ',
          url: '/financials/transactions'
        },

        {
          title: 'Vendor Statement ',
          url: '/financials/vendorstatement'
        },

        ],
      },
      {
        title: 'Analytics',
        active: false,
        children: [{
          title: 'COA Mgt',
          url: '/datacenter/port'
        },
        {
          title: 'Period Mgt',
          url: '/datacenter/port'
        },
        {
          title: 'M2M Exposure',
          url: '/datacenter/port'
        },
        {
          title: 'FFA / Options',
          url: '/datacenter/port'
        },
        {
          title: 'Bunker Contracts',
          url: '/datacenter/port'
        },
        ],
      },
      //this one
      {
        title: 'System Configuration',
        active: false,

        children: [
          {
            title: 'Sys Configure',
            url: '/datacenter/port'
          },
          {
            title: 'Cargo',
            url: '/datacenter/port'
          },
          {
            title: 'Port',
            url: '/datacenter/port'
          },
          {
            title: 'Vessel',
            url: '/datacenter/vessels'
          },
          // {
          //   
          //   title: 'Voyage',
          //   url: '/datacenter/port'
          // },
          {
            title: 'Security',
            url: '/datacenter/port'
          },
          {
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
                    title: 'Currency Types ',
                    url: '/master/currency-types'
                  },

                  {
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
                  {
                    title: 'Fuel Zone Set Details',
                    url: '/master/fuel-zone-set-details'
                  },
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
            title: 'Address',
            url: '/datacenter/address-list'
          },
          {
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
    ]
  )

  useEffect(() => {
    const getPagesList = () => {
      const menuDataProcessed = JSON.parse(JSON.stringify(docData))
      const flattenItems = (items, key) =>
        items.reduce((flattenedItems, item) => {
          if (item.category) {
            return flattenedItems
          }
          if (item.key === 'nestedItem1' || item.disabled) {
            // skip unwanted items
            return flattenedItems
          }
          if (Array.isArray(item[key])) {
            const itemsProcessed = item[key].map(child => {
              child.icon = item.icon
              return child
            })
            return flattenedItems.concat(flattenItems(itemsProcessed, key))
          }
          flattenedItems.push(item)
          return flattenedItems
        }, [])
      return flattenItems(menuDataProcessed, 'children')
    }
    setPagesList(getPagesList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docData])

  const changeSearchText = e => {
    setSearchText(e.target.value)
  }

  // const setFav = (e, item) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   const isActive = favs.some(child => child.url === item.url)
  //   if (isActive) {
  //     const filtered = favs.filter(child => child.url !== item.url)
  //     store.set('app.topbar.favs', filtered)
  //     setFavs(filtered)
  //     return
  //   }
  //   if (favs.length >= 3) {
  //     message.info('Only three pages can be added to your bookmarks.')
  //     return
  //   }
  //   const items = [...favs]
  //   items.push(item)
  //   store.set('app.topbar.favs', items)
  //   setFavs(items)
  // }

  const generatePageList = (searchText) => {
    const searchTextProcessed = searchText ? searchText.toUpperCase() : ''
    return pagesList.map(item => {
      const isActive = favs.some(child => child.url === item.url)
      if (!item.title.toUpperCase().includes(searchTextProcessed) && searchTextProcessed) {
        return null
      }
      if (item.url) {
        return (
          <Link to={item.url} className={style.link} key={item.key}>
            <div
              className={`${style.setIcon} ${isActive ? style.setIconActive : ''}`}
              // onClick={e => setFav(e, item)}
              role="button"
              tabIndex="0"
              onFocus={e => {
                e.preventDefault()
              }}
            // onKeyPress={e => setFav(e, item)}
            >
              <i className="fe fe-arrow-right" />
            </div>
            <span>
              <i className={`mr-2 fe ${item.icon}`} />
              {item.title}
            </span>
          </Link>
        )
      }
      return (
        <Link to="" key={item.key}>
          <div
            className={`${style.setIcon} ${isActive ? style.setIconActive : ''}`}
            // onClick={e => setFav(e, item)}
            role="button"
            tabIndex="0"
            onFocus={e => {
              e.preventDefault()
            }}
          // onKeyPress={e => setFav(e, item)}
          >
            <i className="fe fe-arrow-right" />
          </div>
          <span>
            <i className={`mr-2 fe ${item.icon}`} />
            {item.title}
          </span>
        </Link>
      )
    })
  }

  const menu = (
    <React.Fragment>
      <div className="card cui__utils__shadow width-300">
        <div className="card-body p-1 ">
          <div className="p-2">
            <Input
              className="search_bar_bar"
              value={searchText}
              onChange={changeSearchText}
              placeholder="Search..."
              allowClear
            />
          </div>
          <div className="height-200">
            <PerfectScrollbar>
              <div className="px-2 pb-2">{generatePageList(searchText)}</div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
  return (
    <div className={style.container}>
      {favs.map(item => {
        return (
          <Tooltip key={item.key} placement="bottom" title={item.title}>
            <Link to={item.url} className={`${style.item} mr-3`}>
              <i className={`${style.icon} fe ${item.icon}`} />
            </Link>
          </Tooltip>
        )
      })}
      <Tooltip placement="bottom" title="Search">
        <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft" arrow>
          <span className={style.item}>
            <i className={`${style.icon} fe fe-search`} />
          </span>
        </Dropdown>
      </Tooltip>
    </div>
  )
}

export default connect(mapStateToProps)(Search)
