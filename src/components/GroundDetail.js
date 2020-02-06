import React from 'react'
import { Row, Col, Rate, Divider, Avatar, Button } from 'antd'
import styled from 'styled-components'

const DescribeSyled = styled.div`
  text-align: initial;
  font-size: 18px;
`
const ContentTitleSyled = styled.div`
  text-align: initial;
  font-size: 40px;
  weight: bold;
`
const PriceSyled = styled.div`
  text-align: start;
  font-size: 35px;
  weight: bold;
  color: green;
`
const TimeSyled = styled.div`
  font-size: 25px;
  weight: bold;
`
const BookButtonSyled = styled(Button)`
  width: 100%;
  height: 60px;
  background: #00ff00;
`
const ShareButtonSyled = styled(Button)`
  width: 100%;
  height: 60px;
  background: white;
`

const GroundDetail = props => {
  return (
    <Row type='flex' justify='start' gutter={[32, 42]} style={{ textAlign: 'initial' }}>
      <Col span={16}>
        <img
          style={{ width: '100%' }}
          src='https://www.keonhanh.com/wp-content/uploads/2019/01/san-bong-da-mini-tphcm-tot-nhat.jpg'
        ></img>
      </Col>
      <Col span={8}>
        <Row gutter={[0, 24]}>
          <ContentTitleSyled> Old Trafford Stadium </ContentTitleSyled>
          <Col span={20}>
            <DescribeSyled> Sir Matt Busby way, Stretford Manchester M17 ORA, UK</DescribeSyled>
          </Col>
          <Col span={8}>
            <Rate disabled allowHalf defaultValue={4.5} />
          </Col>
          <Col>
            <Divider />
          </Col>
          <Row type='flex' gutter={32}>
            <Col span={2}>
              <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'></Avatar>
            </Col>
            <Col>
              <h2> Phuong Nguyen</h2>
              <h1> Owner</h1>
            </Col>
          </Row>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <Row type='flex' justify='start'>
            <Col span={8}>
              <PriceSyled> $25.00</PriceSyled>
            </Col>
            <Col span={2}>
              <TimeSyled> /hour</TimeSyled>
            </Col>
          </Row>
          <Row gutter={[4, 16]}>
            <Col span={12}>
              <BookButtonSyled type='primary' size={'large'}>
                Book
              </BookButtonSyled>
            </Col>
            <Col span={6}>
              <ShareButtonSyled type='primary' icon='star' size={'large'}>
                Favorite
              </ShareButtonSyled>
            </Col>
            <Col span={6}>
              <ShareButtonSyled type='primary' icon='share-alt' size={'large'}>
                Share
              </ShareButtonSyled>
            </Col>
          </Row>
          <Row>
            <Col span={2}>
              <PriceSyled> 4</PriceSyled>
            </Col>
            <Col style={{ padding: 25 }}>
              <div> hour is available</div>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  )
}

export default GroundDetail
