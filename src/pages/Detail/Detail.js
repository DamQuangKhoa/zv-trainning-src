import React, { useEffect } from 'react'
import { Row, Col, Icon, Divider } from 'antd'

import GroundDetail from '../../components/GroundDetail/GroundDetail'
import GroundDetailComment from '../../components/GroundDetail/GroundDetailComment'
import GroundDetailHistory from '../../components/GroundDetail/GroundDetailHistory'
import { TitleSyled } from '../../components/Home/styled/HomeStyled'
const DetailPage = props => {
  useEffect(() => {
    props.getSingle(1)

    return () => {
      //
    }
  }, [])
  useEffect(() => {
    console.log()

    return () => {}
  }, [props.ground])
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
      <GroundDetail ground={props.ground} />
      <Row type='flex' style={{ marginTop: 20 }}>
        <GroundDetailComment />
        <GroundDetailHistory />
      </Row>
    </>
  )
}

export default DetailPage
