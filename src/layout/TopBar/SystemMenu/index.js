import { CloseOutlined, ExpandOutlined, LineOutlined } from '@ant-design/icons'
import { Radio, Space } from 'antd'
import React from 'react'

const SystemMenu = () => {
    return (
        <Space>
            <Radio.Group size="small" >
                <Radio.Button value="large"><LineOutlined /></Radio.Button>
                <Radio.Button value="default"><ExpandOutlined /></Radio.Button>
                <Radio.Button value="small"><CloseOutlined /></Radio.Button>
            </Radio.Group>
        </Space>
    )
}
export default SystemMenu
