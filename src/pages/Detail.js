import React from 'react'
import { Row, Col, Icon, Divider, Rate, Card, Avatar, Button } from 'antd'

import styled from 'styled-components'
import { Comment, Tooltip, List } from 'antd'
import GroundDetail from '../components/GroundDetail'
import GroundDetailComment from '../components/GroundDetailComment'
import GroundDetailHistory from '../components/GroundDetailHistory'
const TitleSyled = styled.div`
  text-align: initial;
  font-size: 25px;
  weight: bold;
  margin: 15px;
`
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
const ImageSyled = styled.img`
  width: 100px;
`

const DetailPage = props => {
  return (
    <>
      <Row type='flex' justify='start' align='middle'>
        <Col span={1}>
          <Icon type='left' />
        </Col>
        <Divider type='vertical' style={{ height: 'auto' }} />
        <Col span={2}>
          <TitleSyled>Grounds</TitleSyled>
          <h2></h2>
        </Col>
      </Row>
      <GroundDetail />
      <Row type='flex' style={{ marginTop: 20 }}>
        <GroundDetailComment />
        <GroundDetailHistory />
      </Row>
    </>
  )
}

export default DetailPage
