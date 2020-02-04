import React from 'react'
import { Menu, Layout, Input, Row, Col, Avatar } from 'antd'
import styled from 'styled-components'
const { Search } = Input

const { Header } = Layout
const HeaderComp = props => {
  return (
    <Header className='header' style={{ paddingLeft: 100, paddingRight: 100 }}>
      <Row>
        <Col span={20}>
          <Row>
            <Col span={4}>
              <Logo />
            </Col>
            <Col span={12}>
              <Search placeholder='input search text' onSearch={value => console.log(value)} />
            </Col>
            <Col span={8}>
              <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                <Menu.Item key='1'>nav 1</Menu.Item>
                <Menu.Item key='2'>nav 2</Menu.Item>
                <Menu.Item key='3'>nav 3</Menu.Item>
                <Menu.Item key='4'>nav 4</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
        </Col>
      </Row>
    </Header>
  )
}
const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
`

const HeaderSyled = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export default HeaderComp
