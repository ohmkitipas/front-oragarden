import React from 'react'
import { Menu } from 'antd'

export default function RightMenu() {
    return (
        <div>
            < Menu mode="horizontal">
                <Menu.Item key="1">
                    <a href="">SIGN IN </a>
                </Menu.Item>
                |
                <Menu.Item key="2">
                    <a href=""> SIGN OUT</a>
                </Menu.Item>
                <Menu.Item>
                    <a href = "">Carts</a>
                </Menu.Item>
            </Menu>
        </div>
    )
}
