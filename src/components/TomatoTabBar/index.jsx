import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TabBar, Icon } from 'zarm'
import { useHistory } from 'react-router-dom'

const TabIcon = Icon.createFromIconfont('/src/utils/tab.icon.js')

const TomatoTabBar = ({showTab}) => {
    const [activeKey, setActiveKey] = useState('/')
    const history = useHistory()

    const changeTab = (path) => {
        setActiveKey(path)
        history.push(path)
    }

    return (
        <TabBar visible={showTab} activeKey={activeKey} onChange={changeTab}>
            <TabBar.Item 
                itemKey="/" 
                title="首页" 
                icon={<TabIcon type="home" />}
            />

            <TabBar.Item 
                itemKey="/item" 
                title="商品"
                icon={<TabIcon type="insurance"/> }
            />

            <TabBar.Item 
                itemKey="/user"
                title="个人中心" 
                icon={<TabIcon type="user" />}
            />
        </TabBar>
  )
}


// 组件属性
TomatoTabBar.propTypes = {
    showTab: PropTypes.bool
}

export default TomatoTabBar