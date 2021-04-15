/*eslint-disable*/
import React from 'react'
import { Table, Avatar } from 'antd'
// import data from './data.json'
import style from './style.module.scss'
import { PaperClipOutlined, StarFilled, UserOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'From',
    dataIndex: 'actionName',
    key: 'actionName',
    className: 'text-gray-6',
    render: (item) => {
      return (
        <>
          <Avatar size="small" icon={<UserOutlined />} className="mr-2" />
          { item}
        </>
      )
    }
  },
  {
    title: 'Message',
    dataIndex: 'description',
    key: 'description',
    className: 'text-gray-6',
  },
  {
    title: '',
    dataIndex: '',
    key: 'attachment',
    className: 'text-gray-6',
    render: () => {
      return (
        <div className="text-nowrap">
          <PaperClipOutlined />
        </div>
      )
    },
  },
  {
    title: '',
    dataIndex: '',
    key: 'rate',
    className: 'text-gray-6',
    render: () => {
      return (
        <div className="text-nowrap">
          <StarFilled style={{ color: "orange" }} />
        </div>
      )
    },
  },
  {
    title: '',
    dataIndex: 'time',
    key: 'time',
    className: 'text-gray-6',

  },
  {
    dataIndex: 'action',
    key: 'action',
    className: 'text-right',
    render: () => {
      return (
        <button type="button" className="btn btn-light round-btn">
          <i className="fe fe-more-vertical text-blue" />
        </button>
      )
    },
  },
]

const data = [
  {
    "key": "1",
    "actionName": "Anil",
    "time": "4:41 PM",
    "description": "Lorem Ipsum is simply dummy text of the printing...",
  },
  {
    "key": "2",
    "actionName": "Somil",
    "time": "5:41 PM",
    "description": "Lorem Ipsum is simply dummy text of the printing...",

  },
  {
    "key": "3",
    "actionName": "Mr. Gupta",
    "time": "6:41 PM",
    "description": "Lorem Ipsum is simply dummy text of the printing...",
  },
  {
    "key": "4",
    "actionName": "Mr. John",
    "time": "6:41 PM",
    "description": "Lorem Ipsum is simply dummy text of the printing...",
  }
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
}

const Table7 = () => {
  return (
    <div>
      {/* <div className={`${style.textDivider} mb-2`}>
        <h4 className={`${style.textDividerContent} font-size-24 font-weight-bold`}>
          Active Users
        </h4>
      </div> */}
      <div className={style.table}>
        <Table size="small" columns={columns} dataSource={data} pagination={false} rowSelection={rowSelection} className="email-table" />
      </div>
    </div>
  )
}

export default Table7
