import React from 'react'
import { Row, Col, Icon, Divider, Rate, Card, Avatar, Button } from 'antd'

import styled from 'styled-components'
import { Comment, Tooltip, List } from 'antd'
import moment from 'moment'
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
      <Row type='flex' style={{ marginTop: 20 }}>
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
      </Row>
    </>
  )
}

export default DetailPage
