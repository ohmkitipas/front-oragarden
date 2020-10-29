import React from 'react'
import { Menu } from 'antd';

export default function MidMenu() {
    return (
        <div>
            < Menu mode="horizontal">
                <Menu.Item key="1">
                    <a href="">PRODUCTS</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a href=""> PLANT CARE</a>
                </Menu.Item>
                <Menu.Item>
                    <a href = "">ABOUT US</a>
                </Menu.Item>
            </Menu>
        </div>
    )
}
