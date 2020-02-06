import React, { useState, useEffect } from 'react'
import HomeAction from '../components/HomeAction'
import HomeList from '../components/HomeList'
import { connect } from 'react-redux'
import { actions as groundActions } from '../reducers/ground'
import { getVisibleGround, getVisibleGroundFilteredByKeyword } from '../selectors/ground'
import { toJS } from 'immutable'
const HomePage = props => {
  useEffect(() => {
    props.getGrounds()

    // console.log(props.grounds)

    return () => {}
  }, [])
  useEffect(() => {
    // console.log('filter', props.ground_filter)

    return () => {
      // cleanup
    }
  }, [props.grounds])
  return (
    <>
      <HomeAction />
      <HomeList />
    </>
  )
}
const mapStateToProps = state => ({
  // grounds: state.groundReducer.get('grounds').toJS(),
  grounds: getVisibleGround(state.groundReducer),
  ground_filter: getVisibleGroundFilteredByKeyword(state.groundReducer),
})
const mapDispatchToProps = (dispatch, props) => {
  return {
    getGrounds: () => {
      dispatch(groundActions.getList())
    },
    getSingle: id => {
      dispatch(groundActions.getSingle(id))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
