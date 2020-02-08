import React from 'react'
import { Col, Row, Divider, List, Tooltip, Comment, Rate } from 'antd'
import styled from 'styled-components'
import moment from 'moment'

const HeaderSyled = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

const ContentTitleSyled = styled.div`
  text-align: initial;
  font-size: 40px;
  weight: bold;
`
const Author = props => {
  return (
    <>
      <Row>
        <Col span={6} style={{ width: 'auto', marginRight: '25' }}>
          <h2> Christino Ronando</h2>
          <h1> Real Marid</h1>
        </Col>
        <Col span={12}>
          <Rate disabled allowHalf defaultValue={4.5} />
        </Col>
      </Row>
    </>
  )
}
const data = [
  {
    actions: [<span key='comment-list-reply-to-0'>Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and
        Axure), to help people create their product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key='comment-list-reply-to-0'>Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and
        Axure), to help people create their product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
]

const GroundDetailComment = props => {
  return (
    <Col span={16}>
      <Row type='flex' justify='start'>
        <ContentTitleSyled> Comment & Review (4) </ContentTitleSyled>
      </Row>
      <Col span={22}>
        <Divider />
      </Col>
      <Col span={20}>
        <List
          className='comment-list'
          itemLayout='horizontal'
          dataSource={data}
          renderItem={item => (
            <li style={{ textAlign: 'initial' }}>
              <Comment
                actions={item.actions}
                author={<Author />}
                avatar={item.avatar}
                content={item.content}
                // datetime={item.datetime}
              />
            </li>
          )}
        />
      </Col>
    </Col>
  )
}

export default GroundDetailComment
