import React, { useState } from 'react'
import FooterComp from '../common/Footer'
import { Col, Row, Menu, Dropdown, Icon, Input, List, Card, Button } from 'antd'
import styled from 'styled-components'
const { Search } = Input
const { Meta } = Card

const DescribeSyled = styled.div`
  text-align: initial;
  font-size: 18px;
`
const TitleSyled = styled.div`
  text-align: initial;
  font-size: 25px;
  weight: bold;
`
const PriceSyled = styled.div`
  text-align: end;
  font-size: 25px;
  weight: bold;
  color: green;
`
const TimeSyled = styled.div`
  font-size: 20px;
  weight: bold;
  color: green;
  text-align: end;
`
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
const listData = []
for (let i = 0; i < 6; i++) {
  listData.push({
    href: '',
    title: `Old Trafford Stadium `,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    price: '25.00',
    currency: '$',
    image: 'https://www.keonhanh.com/wp-content/uploads/2019/01/san-bong-da-mini-tphcm-tot-nhat.jpg',
    time: 'hour',
  })
}
const Descrips = (describe, value) => {}
const HomePage = props => {
  return (
    <>
      <Row style={{ paddingTop: 15 }}>
        <Col span={24}>
          <Col span={18}>
            <Row type='flex' justify='start' gutter={[16, 16]}>
              <Col span={4}>
                <h2>Grounds</h2>
              </Col>
              <Col span={4}>
                <Dropdown.Button overlay={menu} icon={<Icon type='down' />}>
                  Dropdown
                </Dropdown.Button>
              </Col>
              <Col span={4}>
                <Dropdown.Button overlay={menu} icon={<Icon type='down' />}>
                  Dropdown
                </Dropdown.Button>
              </Col>
              <Col span={4}>
                <Dropdown.Button overlay={menu} icon={<Icon type='down' />}>
                  Dropdown
                </Dropdown.Button>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row type='flex' justify='end'>
              <Search placeholder='input search text' enterButton onSearch={value => console.log(value)} />
            </Row>
          </Col>
        </Col>
      </Row>

      <Row>
        <List
          grid={{ column: 3, gutter: 16 }}
          dataSource={listData}
          renderItem={item => (
            <List.Item>
              <Card cover={<img alt='example' src={item.image} />}>
                <>
                  <Row type='flex' justify='start'>
                    <Col span={16}>
                      <TitleSyled>{item.title}</TitleSyled>
                    </Col>
                  </Row>
                  <Row type='flex' justify='start'>
                    <Col span={16}>
                      <DescribeSyled>{item.description.substring(0, 50)}</DescribeSyled>
                    </Col>
                    <Col span={8}>
                      <PriceSyled>
                        {item.currency} {item.price}
                      </PriceSyled>
                      <TimeSyled>/{item.time}</TimeSyled>
                    </Col>
                  </Row>
                </>
              </Card>
            </List.Item>
          )}
        />
      </Row>
    </>
  )
}

export default HomePage
