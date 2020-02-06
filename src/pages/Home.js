import React, { useState, useEffect } from 'react'
import HomeAction from '../components/HomeAction'
import HomeList from '../components/HomeList'
import { connect } from 'react-redux'
import { actions as groundActions } from '../reducers/ground'

const HomePage = props => {
  const [visible, setVisible] = useState("initialState")
  useEffect(() => {
    props.getGrounds()
    return () => {}
  }, [])
  return (
    <>
      <HomeAction />
      <HomeList />
    </>
  )
}
const mapStateToProps = state => ({
  ground: state.groundReducer,
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
