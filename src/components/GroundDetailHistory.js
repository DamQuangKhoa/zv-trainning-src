import React from 'react'
import { Col, Row, Divider } from 'antd'
import styled from 'styled-components'

const ContentTitleSyled = styled.div`
  text-align: initial;
  font-size: 40px;
  weight: bold;
`
const TimeSyled = styled.div`
  font-size: 25px;
  weight: bold;
`
const ImageSyled = styled.img`
  width: 100px;
`

const GroundDetailHistory = props => {
  return (
    <Col span={8}>
      <Row type='flex' justify='start'>
        <ContentTitleSyled> History(2) </ContentTitleSyled>
        <Col span={22}>
          <Divider />
        </Col>
        <Col>
          <Row gutter={[32, 32]}>
            <Col span={8}>
              <ImageSyled src='https://cdn.iconscout.com/icon/free/png-256/manchester-united-569431.png'></ImageSyled>
            </Col>
            <Col span={16} style={{ textAlign: 'initial' }}>
              <TimeSyled> Champion League</TimeSyled>
              <h1>05 Oct 2017</h1>
              <h1>12 teams </h1>
              <h1>202 players</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default GroundDetailHistory
