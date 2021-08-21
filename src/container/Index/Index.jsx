import React from 'react'
import { Button } from 'zarm'
import s from './style.module.less'

export default function Index() {
    return <div>
        Index
        <Button theme="primary">primary按钮</Button>
        <Button theme="default">default按钮</Button>
        <Button theme="danger">danger按钮</Button>

        <div className={s.index}>
            <span>样式</span>
        </div>
    </div>
}