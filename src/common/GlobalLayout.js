import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import HeaderComp from './Header'
const { Content } = Layout

const GlobalLayOut = props => {
  return (
    <Layout className='layout'>
      <HeaderComp />

      <Layout>
        <Layout style={{ paddingLeft: 100, paddingRight: 100 }}>{props.children}</Layout>
      </Layout>
    </Layout>
  )
}
export default GlobalLayOut
