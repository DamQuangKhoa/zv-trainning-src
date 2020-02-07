import React, { useState, useEffect } from 'react'
import HomeAction from '../components/HomeAction'
import HomeList from '../components/HomeList'
import { connect } from 'react-redux'
import { actions as groundActions } from '../reducers/ground'
import {
  getVisibleGround,
  getVisibleGroundFilteredByKeyword,
  getVisibleGroundSearchByKeyword,
  getVisibleGroundSortByKeyword,
} from '../selectors/ground'
import { toJS } from 'immutable'
import { Spin, Alert, message } from 'antd'
const HomePage = props => {
  useEffect(() => {
    console.log()

    props.getGrounds()
    props.getSingle(1)
    props.setFilterValue(25)
    props.setSortValue({
      field: ['title'],
      order: ['asc'],
    })

    // console.log(props.grounds)

    return () => {}
  }, [])
  useEffect(() => {
    console.log('filter', props.ground_filter)
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
  const isLoading = props.ground_info.get('isLoading')
  const error = props.ground_info.get('errorMessage').message

  return (
    <>
      {console.log('error', error)}
      {error && message.error({ error })}
      <Spin size='large' spinning={isLoading}>
        <>
          <HomeAction />
          <HomeList />
        </>
      </Spin>
    </>
  )
}
const mapStateToProps = state => ({
  // grounds: state.groundReducer.get('grounds').toJS(),
  ground_info: state.groundReducer,
  grounds: getVisibleGround(state.groundReducer),
  ground_filter: getVisibleGroundFilteredByKeyword(state.groundReducer),
  ground_search: getVisibleGroundSearchByKeyword(state.groundReducer),
  ground_sort: getVisibleGroundSortByKeyword(state.groundReducer),
})
const mapDispatchToProps = (dispatch, props) => {
  return {
    getGrounds: () => {
      dispatch(groundActions.getList())
    },
    getSingle: id => {
      dispatch(groundActions.getSingle(id))
    },
    setFilterValue: value => {
      dispatch(groundActions.setFilterValue(value))
    },
    setSearchValue: value => {
      dispatch(groundActions.setSearchValue(value))
    },
    setSortValue: value => {
      dispatch(groundActions.setSortValue(value))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
