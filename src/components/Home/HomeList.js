import React from 'react'
import { List, Card, Row, Col } from 'antd'
import { TitleSyled, DescribeSyled, PriceSyled, TimeSyled } from './styled/HomeStyled'

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
const HomeList = props => {
  return (
    <Row>
      <List
        grid={{ column: 3, gutter: [32, 32] }}
        dataSource={props.grounds}
        renderItem={item => (
          <List.Item>
            <Card onClick={() => props.hanleGroundClick()} cover={<img alt='example' src={item.image} />}>
              <>
                <Row type='flex'>
                  <TitleSyled>{item.title}</TitleSyled>
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
  )
}

export default HomeList
