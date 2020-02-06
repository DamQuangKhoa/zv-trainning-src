import React from 'react'
import { Row, Col, Icon, Dropdown, Input, Menu } from 'antd'

const { Search } = Input
const menu = (
  <Menu
    onClick={() => {
      console.log('hello ')
    }}
  >
    <Menu.Item key='1'>1st menu item</Menu.Item>
    <Menu.Item key='2'>2nd memu item</Menu.Item>
    <Menu.Item key='3'>3rd menu item</Menu.Item>
  </Menu>
)
const HomeAction = props => {
  return (
    <Row align='middle' type='flex' justify='space-between' style={{ padding: 20 }}>
      <Col span={8}>
        <Row type='flex' justify='space-between' gutter={[16, 16]}>
          {/* <Col span={4}> */}
          <h2>Grounds</h2>
          {/* </Col> */}
          {/* <Col span={4}> */}
          <Dropdown.Button overlay={menu} icon={<Icon type='down' />}>
            Dropdown
          </Dropdown.Button>
          {/* </Col> */}
          {/* <Col span={4}> */}
          <Dropdown.Button overlay={menu} icon={<Icon type='down' />}>
            Dropdown
          </Dropdown.Button>
          {/* </Col> */}
          {/* <Col span={4}> */}
          <Dropdown.Button overlay={menu} icon={<Icon type='down' />}>
            Dropdown
          </Dropdown.Button>
          {/* </Col> */}
        </Row>
      </Col>
      <Col span={6}>
        <Row type='flex' justify='end'>
          <Search placeholder='input search text' enterButton onSearch={value => console.log(value)} />
        </Row>
      </Col>
    </Row>
  )
}

export default HomeAction
