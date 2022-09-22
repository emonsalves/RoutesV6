import { Link } from "react-router-dom"
import "antd/dist/antd.css"
import { Menu } from "antd"
import { EditOutlined, LoginOutlined, HomeOutlined } from "@ant-design/icons"

import React from "react"

function Navbar() {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Menu.Item key="one" >
        <Link to="/">PetHouse</Link>
      </Menu.Item>
      <Menu.Item key="two" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="three" icon={<LoginOutlined />}>
        <Link to="/Login">Login</Link>
      </Menu.Item>
      <Menu.Item key="four" icon={<EditOutlined />}>
        <Link to="/Register">Register</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
