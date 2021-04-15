/*eslint-disable*/

import React from 'react'
import style from './style.module.scss'
import { Button, Input } from 'antd'
import { ExportOutlined, PlusOutlined } from '@ant-design/icons'
const { Search } = Input
const List17 = () => {
  return (
    <ul className="list-unstyled">
      <li className={style.item}>
        <div className={`${style.separator} bg-success mr-3`} />
        <label htmlFor="checkbox-1" className={`${style.control} ${style.checkbox} mb-0`}>
          <input type="checkbox" id="checkbox-1" />
          <span className={`${style.controlIndicator}`} />
          <div className="d-inline-block">
            <div>Get vessel quotes</div>
            <div className="text-muted">Due in an hour</div>
          </div>
        </label>
        <label className={`${style.status_label_danger}`}>PRIORITY</label>
      </li>
      <li className={style.item}>
        <div className={`${style.separator} bg-primary mr-3`} />
        <label htmlFor="checkbox-2" className={`${style.control} ${style.checkbox} mb-0`}>
          <input type="checkbox" id="checkbox-2" />
          <span className={`${style.controlIndicator}`} />
          <div className="d-inline-block">
            <div>Forward receipts</div>
            <div className="text-muted">Due today</div>
          </div>
        </label>
      </li>
      <li className={style.item}>
        <div className={`${style.separator} mr-3`} />
        <label htmlFor="checkbox-3" className={`${style.control} ${style.checkbox} mb-0`}>
          <input type="checkbox" id="checkbox-3" checked />
          <span className={`${style.controlIndicator}`} />
          <div className="d-inline-block">
            <div>
              <s>Talk to Meghan</s>
            </div>
            <div className="text-muted">Due yesterday</div>
          </div>
        </label>
        <label className={`${style.status_label_success}`}>COMPLETED</label>
      </li>
      <li className={style.item}>
        <div className={`${style.separator} bg-danger mr-3`} />
        <label htmlFor="checkbox-4" className={`${style.control} ${style.checkbox} mb-0`}>
          <input type="checkbox" id="checkbox-4" checked />
          <span className={`${style.controlIndicator}`} />
          <div className="d-inline-block">
            <div>
              <s>Send mail to broker</s>
            </div>
            <div className="text-muted">Due yesterday</div>
          </div>
        </label>
        <label className={`${style.status_label_success}`}>COMPLETED</label>
      </li>
      <Input
        placeholder="Add an item..."
        className={style.todoAddInput}
        suffix={
          <Button className={`${style.extraBtn}`}>
            <PlusOutlined />
          </Button>
        }
      />
    </ul>
  )
}

export default List17
