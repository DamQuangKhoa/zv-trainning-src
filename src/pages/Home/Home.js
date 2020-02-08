import React, { useState, useEffect } from 'react'
import HomeAction from '../../components/Home/HomeAction'
import HomeList from '../../components/Home/HomeList'

import { Spin, Alert, message } from 'antd'
const Home = props => {
  useEffect(() => {
    props.getGrounds()
    // props.getSingle(1)
    // props.setFilterValue(25)
    // props.setSortValue({
    //   field: ['title'],
    //   order: ['asc'],
    // })

    // console.log(props.grounds)

    return () => {}
  }, [])
  useEffect(() => {
    // console.log('filter', props.ground_filter)
    // console.log('search', props.ground_search)
    // console.log('sort', props.ground_sort)

    return () => {
      // cleanup
    }
  }, [props.grounds])

  useEffect(() => {
    return () => {
      // cleanup
    }
  }, [props.filter_value])

  const hanleGroundClick = () => {
    props.router.history.push('/1')
  }
  const isLoading = props.ground_info.get('isLoading')
  const error = props.ground_info.get('errorMessage').message

  return (
    <>
      {/* {console.log('error', error)} */}
      {error && message.error({ error })}
      {/* <Spin size='large' spinning={isLoading}> */}
      <>
        <HomeAction handleFilter={props.handleFilter} />
        <HomeList hanleGroundClick={hanleGroundClick} grounds={props.grounds} />
      </>
      {/* </Spin> */}
    </>
  )
}
export default Home
