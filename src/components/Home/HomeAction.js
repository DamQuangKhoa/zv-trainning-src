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
      <Col span={16}>
        <Row type='flex' gutter={[16]}>
          <Col span={2}>
            <h2>Grounds</h2>
          </Col>
          <Col span={4}>
            <Search placeholder='Filter price' onChange={e => props.handleFilter(e.target.value)} />>
          </Col>
          <Col span={4}>
            <Dropdown.Button overlay={menu} icon={<Icon type='down' />}>
              Sortby
            </Dropdown.Button>
          </Col>
          <Col span={4}>
            <Dropdown.Button overlay={menu} icon={<Icon type='down' />}>
              Order
            </Dropdown.Button>
          </Col>
        </Row>
      </Col>
      <Col span={8}>
        <Row type='flex' justify='end'>
          <Col>
            <Search placeholder='input search text' enterButton onChange={e => props.handleFilter(e.target.value)} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default HomeAction
